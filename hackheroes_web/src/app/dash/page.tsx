"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { User } from '../types/user';
import { fetchLoggedUser } from "@/app/api/user";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Slider from "./Slider";
import { redirect } from 'next/navigation';

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchLoggedUser().then((user) => setUser(user));
    }, []);

    useEffect(() => {
        const jwt = document.cookie.split('; ').find(row => row.startsWith('jwt='));
        if (!jwt) {
            redirect("/auth");
        }
    }, [user]);

    return !user ? null : (
        <div className="flex flex-col min-h-screen bg-gray-dark text-white pt-[8vh]">
            <Head>
                <title>{user.username}&apos;s Dashboard</title>
            </Head>

            <Sidebar />

            <main className="flex flex-col flex-grow container mx-auto px-4 py-8 pt-[2vh] bg-gray-light rounded-2xl w-[60%]">
                <div className="flex items-center justify-between mb-8 bg-gray-dark p-4 rounded-lg">
                    <div className="flex items-center">
                        <Image
                            src={`/api/v1/avatar/${user.id}/${user.avatarHash}`}
                            alt={user.id}
                            width={256}
                            height={256}
                            className="w-16 h-16 bg-gray-light rounded-full flex items-center justify-center text-2xl font-bold">
                        </Image>
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold">{user.fullName.givenName}{user.fullName.familyName}</h1>
                            <p className="mt-1 text-base">{user.bio}</p>
                        </div>
                    </div>
                    <Link href="/dash/profile" className="bg-gray-dark p-2 rounded-lg text-center text-xl font-bold hover:underline ml-auto">
                        Ustawienia profilu
                        <FontAwesomeIcon className="pl-1" icon={faGear} style={{ color: "#29ff77" }}/>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-dark p-6 rounded-lg text-center h-[15vh]">
                        <div className="text-orange-500 text-3xl font-bold">🌳</div>
                        <p>Wirtualny ogródek</p>
                    </div>
                    <div className="bg-gray-dark rounded-lg h-[15vh]">
                        <Link href="/calculator" className="p-6 rounded-lg text-center">
                            <p className="text-xl font-bold ml-2">Eco Kalculator</p>
                        </Link>
                    </div>
                </div>
                <Slider />
            </main>
        </div>
    );
};

export default Dashboard;