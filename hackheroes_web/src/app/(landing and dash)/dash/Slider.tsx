"use client";
import React, { useEffect, useState } from 'react';
import { getCurrentUserPosts } from "@/app/api/posts";
import { Post } from '../../types/post';
import { fetchLoggedUser, getUserData } from "@/app/api/user";
import { User } from '../../types/user';

const Slider = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const loggedUser = await fetchLoggedUser();
            if (loggedUser) {
                const userPosts = await getCurrentUserPosts(loggedUser.id);
                // Sort posts by creation date in descending order and get the last 3 posts
                const sortedPosts = userPosts.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                const latestPosts = sortedPosts.slice(0, 3);

                // Fetch gardener data for each post to get the username
                const userData = await Promise.all(latestPosts.map((post: Post) => getUserData(post.author)));
                const updatedPosts = latestPosts.map((post: Post) => {
                    const user = userData.find((user: User) => user.id === post.author);
                    return user ? { ...post, author: user.username } : post;
                });

                setPosts(updatedPosts);
            }
        };
        fetchData();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="bg-gray-dark p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Twoje ostatnie posty:</h2>
            <div {...sliderSettings}>
                {posts.map((post) => (
                    <div key={post._id} className="p-4">
                        <h3 className="font-bold">{post.author}</h3>
                        <p>{post.content}</p>
                        <span className="text-gray-500 text-sm">{post.createdAt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;