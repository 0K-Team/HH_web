"use client";
import React from 'react';
import { Post } from '../../types/post';

interface PostFeedProps {
    posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
    return (
        <div className="p-4 px-[20vh]">
            {posts.map((post) => (
                <div key={post._id} className="border border-green-green p-4 py-[2vh]">
                    <h2 className="font-bold">{post.author}</h2>
                    <p>{post.content}</p>
                    <span className="text-gray-500 text-sm">{post.createdAt}</span>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;