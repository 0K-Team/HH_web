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
        <div className="p-4 px-[20vh]">
            <textarea
                className="w-full p-2 border border-green-green rounded bg-gray-dark focus:outline-none focus:ring-2 focus:ring-green-green resize-none"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening?"
            />
            <button
                className="bg-green-green text-gray-dark font-bold p-2 rounded mt-2 transition duration-300 ease-in-out transform hover:bg-[#22cc66] shadow-lg"
                onClick={handlePost}
            >
                Post
            </button>
        </div>
    );
};

export default PostInput;