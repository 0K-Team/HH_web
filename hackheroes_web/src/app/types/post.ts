export interface Post {
    _id: string;
    author: string;
    content: string;
    createdAt: string;
    likes?: string[];
    tags?: string[];
    images?: string[];
}