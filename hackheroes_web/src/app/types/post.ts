import { User } from "./user";

export interface Post {
    _id: string;
    author: string;
    authorObject?: User;
    content: string;
    createdAt: string;
    likes?: string[];
    tags?: string[];
    images?: string[];
    liked?: boolean;
}