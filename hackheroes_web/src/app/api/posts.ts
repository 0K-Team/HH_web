const baseUrl = 'https://ecohero.q1000q.me/api/v1/posts';

export const createPost = async (content: string) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });
    console.log(response.status);
    return await response.json();
};

export const deletePost = async (id: string) => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });
};

export const likePost = async (id: string) => {
    await fetch(`${baseUrl}/like/${id}`, {
        method: 'POST'
    });
};

export const unlikePost = async (id: string) => {
    await fetch(`${baseUrl}/like/${id}`, {
        method: 'DELETE'
    });
};