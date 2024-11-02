"use client";
import React, { useState } from 'react';
import Header from './Header';
import PostFeed from './PostFeed';
import PostInput from './PostInput';
import { Post } from '../../types/post';

const PostPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handlePost = (content: string) => {
        const newPost: Post = {
            _id: Date.now().toString(),
            author: 'User',
            content,
            createdAt: new Date().toISOString(),
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <PostInput onPost={handlePost} />
            <PostFeed posts={posts} />
        </div>
    );
};

export default PostPage;