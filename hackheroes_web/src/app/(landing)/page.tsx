"use client";
import Header from './Header';
import Banner from './Banner';
import { useEffect, useState } from 'react';
import { fetchLoggedUser } from '../api/user';
import { User } from '../types/user';

export default function Home() {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        fetchLoggedUser().then(user => {
            if (user) setUser(user);
        }).catch(() => {
            setUser(undefined);
        });
    }, []);

    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header user={user} />
            <div className="flex-1 flex items-center justify-center">
                <Banner />
            </div>
        </div>
    );
}
