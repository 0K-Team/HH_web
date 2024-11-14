"use client";
import { useEffect, useState } from "react"
import { fetchBlogs } from "../api/blogs";
import BlogCard from "./(components)/BlogCard";
import { Blog } from "../types/blog";
import Header from "../(landing)/Header";

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetchBlogs().then(data => {
            setBlogs(data);
        });
    }, []);

    return (
        <div className="bg-[#1E1E1E] min-h-screen">
            <Header />
            <div className="flex">
                <div className="container mx-auto p-4 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                author={blog.author}
                                image={blog.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}