import React, { useState, useEffect } from 'react';
import Header from './Header';
import PostFeed from './PostFeed';
import PostInput from './PostInput';
import { Post } from '../../types/post';
import { createPost, deletePost, likePost, unlikePost, fetchPosts } from '../../api/posts';
import { getUserData } from '../../api/user';
import { User } from '@/app/types/user';
import Sidebar from '../../dash/Sidebar';

interface PostPageProps {
    user: User;
}

const PostPage: React.FC<PostPageProps> = ({ user }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const allPosts = await fetchPosts();
            if (Array.isArray(allPosts)) {
                const userIds = allPosts.map(post => post.author);
                const userData = await Promise.all(userIds.map(id => getUserData(id)));
                const updatedPosts = allPosts.map(post => {
                    const user = userData.find((user: User) => user.id === post.author);
                    return user ? { ...post, author: user.username } : post;
                });
                setPosts(updatedPosts);
            } else {
                console.error('Fetched posts are not an array:', allPosts);
            }
        };
        loadPosts();
    }, []);

    const handlePost = async (content: string) => {
        const newPost = await createPost(content);
        newPost.author = user.username;
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
        <div className="min-h-screen bg-gray-dark flex justify-center">
            <div className="w-[80%]">
                <Header />
                <PostInput onPost={handlePost} />
                <PostFeed posts={posts} userId={user.id} onDelete={handleDelete} onLike={handleLike} onUnlike={handleUnlike} />
                <Sidebar />
            </div>
        </div>
    );
};

export default PostPage;