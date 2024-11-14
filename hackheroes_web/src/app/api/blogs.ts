const baseURL = "/api/v1/blogs"

export async function fetchBlogs() {
    const response = await fetch(baseURL);
    return await response.json();
}

export async function fetchBlog(id: string) {
    const response = await fetch(`${baseURL}/${id}`);
    return await response.json();
}