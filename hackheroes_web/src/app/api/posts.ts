import { Post } from '@/app/types/post';

// api/posts.ts
const baseUrl = '/api/v1/posts';

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

export const fetchPosts = async (page = 1): Promise<{
    page: number,
    limit: number,
    data: Post[],
    total: number,
    pages: number
}> => {
    const response = await fetch(baseUrl + "?page=" + page);
    const result = await response.json();
    return result; // Access the data array
};

export const fetchUserPosts = async (id: string) => {
    const response = await fetch(`${baseUrl}?user=${id}`, {
        method: 'GET'
    });
    const result = await response.json();
    return result.data;
};