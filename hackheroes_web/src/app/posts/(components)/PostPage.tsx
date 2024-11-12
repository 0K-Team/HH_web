"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';
import PostFeed from './PostFeed';
import PostInput from './PostInput';
import { Post } from '../../types/post';
import { createPost, deletePost, likePost, unlikePost, fetchPosts } from '../../api/posts';
import { getUserData } from '../../api/user';
import { User } from '@/app/types/user';
import Sidebar from '../../dash/Sidebar';
import { PaginationRoot, PaginationPrevTrigger, PaginationItems, PaginationNextTrigger } from '@/components/ui/pagination';
import { HStack } from '@chakra-ui/react';

interface PostPageProps {
    user: User;
}

const PostPage: React.FC<PostPageProps> = ({ user }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        console.log("Page changed to " + page);
        const loadPosts = async () => {
            const { data, total } = await fetchPosts(page);
            setTotal(total);
            if (Array.isArray(data)) {
                const userIds = Array.from(new Set(data.map(post => post.author)));
                const userData = await Promise.all(userIds.map(id => getUserData(id)));
                const updatedPosts = data.map(post => {
                    const user = userData.find((user: User) => user.id === post.author);
                    return user ? { ...post, authorObject: user } : post;
                });
                setPosts(updatedPosts);
            } else {
                console.error('Fetched posts are not an array:', data);
            }
        };
        loadPosts();
    }, [page]);

    const handlePost = async (content: string) => {
        const newPost = await createPost(content);
        newPost.author = user.id;
        newPost.authorObject = user;
        setPosts([newPost, ...posts]);
    };

    const handleDelete = async (id: string) => {
        deletePost(id);
        setPosts(posts.filter(post => post._id !== id));
    };

    const handleLike = async (id: string) => {
        likePost(id, user.id);
        setPosts(posts.map(post => post._id === id ? { ...post, liked: true } : post));
    };

    const handleUnlike = async (id: string) => {
        unlikePost(id, user.id);
        setPosts(posts.map(post => post._id === id ? { ...post, liked: false } : post));
    };

    return (
        <div className="min-h-screen bg-gray-dark flex justify-center">
            <div className="w-[80%] text-[#E0E0E0]">
                <Header />
                <PostInput onPost={handlePost} />
                <PostFeed posts={posts} userId={user.id} isAdmin={user.admin ? user.admin : false} onDelete={handleDelete} onLike={handleLike} onUnlike={handleUnlike}/>
                {posts.length > 0 && <div className="flex justify-center mt-4">
                    <PaginationRoot 
                        count={total}
                        page={page}
                        pageSize={10}
                        onPageChange={(details) => setPage(details.page)}
                        defaultPage={1}
                    >
                        <HStack>
                            <PaginationPrevTrigger />
                            <PaginationItems />
                            <PaginationNextTrigger />
                        </HStack>
                    </PaginationRoot>
                </div>}
                <Sidebar />
            </div>
        </div>
    );
};

export default PostPage;