"use client";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
    id: string;
    title: string;
    image: string;
    author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, image, author }) => {
    return (
        <div className="bg-gray-light rounded-lg overflow-hidden">
            <Link href={`/blog/${id}`}>
                <div className="relative h-48">
                    <div className="absolute left-0 bg-gradient-to-r from-[#303030FF] hover:to-[#30303080] origin-top-left hover:scale-110 to-[#D9D9D900] w-full h-full p-4 transition-all transition-background-image duration-300 group">
                        <p className="text-white text-lg font-semibold">{title}</p>
                        <p className="text-white font-normal">{author}</p>
                    </div>
                    <img src={image} alt={title} className="object-cover w-full h-full" />
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;