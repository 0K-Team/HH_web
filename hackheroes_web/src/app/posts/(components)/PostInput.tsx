"use client";
import React, { useState } from 'react';

interface PostInputProps {
    onPost: (content: string) => void;
}

const PostInput: React.FC<PostInputProps> = ({ onPost }) => {
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (content.trim()) {
            onPost(content);
            setContent('');
        }
    };

    return (
        <div className="p-4">
            <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening?"
            />
            <button
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={handlePost}
            >
                Post
            </button>
        </div>
    );
};

export default PostInput;