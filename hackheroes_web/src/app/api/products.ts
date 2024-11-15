const baseURL = "/api/v1/products";

export async function fetchProducts(page = 1) {
    const response = await fetch(baseURL + "?page=" + page);
    return await response.json();
}

export async function fetchProduct(id: string) {
    const response = await fetch(`${baseURL}/product/${id}`);
    return await response.json();
}