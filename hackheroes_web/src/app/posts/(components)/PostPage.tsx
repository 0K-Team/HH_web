"use client";
import React, { useState } from 'react';
import Header from './Header';
import PostFeed from './PostFeed';
import PostInput from './PostInput';
import { Post } from '../../types/post';
import { createPost, deletePost, likePost, unlikePost } from '../../api/posts';
import { User } from '@/app/types/user';

interface PostPageProps {
    user: User;
}

const PostPage: React.FC<PostPageProps> = ({ user }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handlePost = async (content: string) => {
        const newPost = await createPost(content);
        setPosts([newPost, ...posts]);
    };

    const handleDelete = async (id: string) => {
        await deletePost(id);
        setPosts(posts.filter(post => post._id !== id));
    };

    const handleLike = async (id: string) => {
        await likePost(id, user.id);
        setPosts(posts.map(post => post._id === id ? { ...post, liked: true } : post));
    };

    const handleUnlike = async (id: string) => {
        await unlikePost(id, user.id);
        setPosts(posts.map(post => post._id === id ? { ...post, liked: false } : post));
    };

    return (
        <div className="min-h-screen bg-gray-dark">
            <Header />
            <PostInput onPost={handlePost} />
            <PostFeed posts={posts} userId={user.id} onDelete={handleDelete} onLike={handleLike} onUnlike={handleUnlike} />
        </div>
    );
};

export default PostPage;