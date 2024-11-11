"use client";
import PostPage from './(components)/PostPage';
import { useEffect, useState } from "react";
import { User } from "@/app/types/user";
import { fetchLoggedUser } from "@/app/api/user";

const Page = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLoggedUser()
            .then((user) => {
                console.log(user);
                setLoading(false);
                setUser(user);
            });
    }, []);

    return (
        loading ? <div>Loading...</div> : <PostPage user={user as User}/>
    );
};

export default Page;