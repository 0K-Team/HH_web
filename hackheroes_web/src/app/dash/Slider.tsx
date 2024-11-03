"use client";
import React, {useEffect, useState} from 'react';
import {fetchPosts} from "@/app/api/posts";
import {Post} from '../types/post';

const Slider = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts().then((posts) => setPosts(posts));
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