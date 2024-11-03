import { Post } from '@/app/types/post';

// api/posts.ts
const baseUrl = 'https://ecohero.q1000q.me/api/v1/posts';

export const createPost = async (content: string) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });
    return await response.json();
};

export const deletePost = async (id: string) => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });
};

export const likePost = async (id: string, userId: string) => {
    const postResponse = await fetch(`${baseUrl}/${id}`);
    const post = await postResponse.json();

    if (!post.likes.includes(userId)) {
        await fetch(`${baseUrl}/like/${id}`, {
            method: 'POST'
        });
    }
};

export const unlikePost = async (id: string, userId: string) => {
    const postResponse = await fetch(`${baseUrl}/${id}`);
    const post = await postResponse.json();

    if (post.likes.includes(userId)) {
        await fetch(`${baseUrl}/like/${id}`, {
            method: 'DELETE'
        });
    }
};

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result.data; // Access the data array
};