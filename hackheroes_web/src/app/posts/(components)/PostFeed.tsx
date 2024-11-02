"use client";
import React from 'react';
import { Post } from '../../types/post';
import { deletePost, likePost, unlikePost } from '../../api/posts';

interface PostFeedProps {
    posts: Post[];
    userId: string;
    onDelete: (id: string) => void;
    onLike: (id: string) => void;
    onUnlike: (id: string) => void;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, userId, onDelete, onLike, onUnlike }) => {
    const handleDelete = async (id: string) => {
        await deletePost(id);
        onDelete(id);
    };

    const handleLike = async (id: string) => {
        await likePost(id, userId);
        onLike(id);
    };

    const handleUnlike = async (id: string) => {
        await unlikePost(id, userId);
        onUnlike(id);
    };

    return (
        <div className="p-4 px-[20vh]">
            {posts.map((post) => (
                <div key={post._id} className="border border-green-green p-4 py-[2vh]">
                    <h2 className="font-bold">{post.author}</h2>
                    <p>{post.content}</p>
                    <span className="text-gray-500 text-sm">{post.createdAt}</span>
                    <div>
                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                        {(post.likes ?? []).includes(userId) ? (
                            <button onClick={() => handleUnlike(post._id)}>Unlike</button>
                        ) : (
                            <button onClick={() => handleLike(post._id)}>Like</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;