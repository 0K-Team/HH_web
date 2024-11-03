"use client";
import React, { useEffect, useState } from 'react';
import { fetchPosts } from "@/app/api/posts";
import { Post } from '../types/post';
import { fetchLoggedUser } from "@/app/api/user";
import { User } from '../types/user';

const Slider = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const loggedUser = await fetchLoggedUser();
            setUser(loggedUser);
            const allPosts = await fetchPosts();
            const userPosts = allPosts.filter(post => post.author === loggedUser.id);
            setPosts(userPosts.slice(-3));
        };
        fetchData();
    }, [user]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="bg-gray-dark p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
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