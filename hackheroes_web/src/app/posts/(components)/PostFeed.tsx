// PostFeed.tsx
"use client";
import React from 'react';
import { Post } from '../../types/post';
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

interface PostFeedProps {
    posts: Post[];
    userId: string;
    isAdmin: boolean;
    onDelete: (id: string) => void;
    onLike: (id: string) => void;
    onUnlike: (id: string) => void;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const time = date.toLocaleTimeString(undefined, {minute: "2-digit", hour: "2-digit"});
    if (date.getDate() == today.getDate()) return `Today at ${time}`;
    if (date.getDate() == today.getDate() - 1) return `Yesterday at ${time}`;
    return `${date.toLocaleDateString()} ${time}`;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts = [], userId, isAdmin, onDelete, onLike, onUnlike }) => {
    return (
        <div className="p-4 px-[20vh]">
            {posts.map((post) => (
                <div key={post._id} className="rounded-lg mb-5 bg-gray-light p-4 py-[2vh]">
                    <div className="flex items-center mb-2">
                        {post.authorObject && (
                            <Image
                                src={`/api/v1/avatar/${post.authorObject.id}/${post.authorObject.avatarHash}`}
                                alt={post.authorObject.username.charAt(0).toUpperCase()}
                                width={64}
                                height={64}
                                className="w-12 h-12 bg-gray-light rounded-full flex-shrink-0" 
                            />
                        )}
                        <div className="ml-3">
                            <h2 className="font-bold">{post.authorObject?.username ?? "Unknown user"}</h2>
                            {post.authorObject && post.authorObject.title && <h3 className="font-light">{post.authorObject.title}</h3>}
                        </div>
                        <div className="ml-auto">
                            <span className="text-gray-500 text-sm">{formatDate(post.createdAt)}</span>
                        </div>
                    </div>
                    <p>{post.content}</p>
                    <div className="flex">
                        <div>
                            {(post.tags ?? []).map(tag => (
                                <span className="text-gray font-bold text-sm rounded mr-3" key={tag}>#{tag}</span>
                            ))}
                        </div>
                        <div className="ml-auto space-x-3">
                            {( post.author == userId || isAdmin ) && <button onClick={() => onDelete(post._id)}><FontAwesomeIcon className="text-red w-6 h-6 mr-4 hover:text-red-hover" icon={faRecycle}></FontAwesomeIcon></button>}
                            <span className='text-2xl text-textColor'>{(post.likes?.length ?? 0) + (post.liked === true ? 1 : post.liked === false ? -1 : 0)}</span>
                            {post.liked ?? (post.likes ?? []).includes(userId) ? (
                                <button onClick={() => onUnlike(post._id)}><FontAwesomeIcon icon={faHeart} className="text-green-green w-6 h-6 hover:text-green-hover"></FontAwesomeIcon></button>
                            ) : (
                                <button onClick={() => onLike(post._id)}><FontAwesomeIcon icon={faHeartRegular} className="text-green-green w-6 h-6 hover:text-green-hover"></FontAwesomeIcon></button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;