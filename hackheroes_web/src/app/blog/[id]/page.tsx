"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBlog } from "../../api/blogs";
import { Blog as IBlog } from "../../types/blog";
import NotFound from "../../not-found";
import ReactMarkdown from "react-markdown";
import Header from "@/app/(landing)/Header";

export default function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetchBlog(id as string).then((blog) => {
            setBlog(blog);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [id]);

    return loading ? (
        <div>Loading...</div>
    ) : blog ? (
        <div className="bg-[#1E1E1E] min-h-screen">
            <Header />
            <div className="p-8">
                <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover my-4 rounded-lg" />
                <article className="prose lg:prose-xl mx-auto dark:prose-invert">
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </article>
            </div>
        </div>
    ) : (
        <NotFound />
    )
}