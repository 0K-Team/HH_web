"use client";
import PostPage from './(components)/PostPage';
import { useEffect, useState } from "react";
import { User } from "@/app/types/user";
import { fetchLoggedUser } from "@/app/api/user";

const Page = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchLoggedUser().then((user) => setUser(user));
    }, []);

    return (
        user ? <PostPage user={user}/> : <div>Loading...</div>
    );
};

export default Page;