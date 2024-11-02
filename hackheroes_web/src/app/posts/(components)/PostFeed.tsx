"use client";
import React from 'react';
import { Post } from '../../types/post';

interface PostFeedProps {
    posts: Post[];
    onDelete: (id: string) => void;
    onLike: (id: string) => void;
    onUnlike: (id: string) => void;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, onDelete, onLike, onUnlike }) => {
    return (
        <div className="p-4 px-[20vh]">
            {posts.map((post) => (
                <div key={post._id} className="border border-green-green p-4 py-[2vh]">
                    <h2 className="font-bold">{post.author}</h2>
                    <p>{post.content}</p>
                    <span className="text-gray-500 text-sm">{post.createdAt}</span>
                    <div>
                        <button onClick={() => onDelete(post._id)}>Delete</button>
                        {post.likes ? (
                            <button onClick={() => onUnlike(post._id)}>Unlike</button>
                        ) : (
                            <button onClick={() => onLike(post._id)}>Like</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;