"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { User } from '../types/user';
import { fetchLoggedUser } from "@/app/api/user";
import Link from "next/link";

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchLoggedUser().then((user) => setUser(user));
    }, []);

    return !user ? (
        <h1>Loading...</h1>
    ) : (
        <div className="flex flex-col min-h-screen bg-grey-dark text-white">
            <Head>
                <title>{user.username}&apos;s Dashboard</title>
            </Head>

            <main className="flex flex-col flex-grow container mx-auto px-4 py-8">
                {/* Profile Header */}
                <div className="flex items-center mb-8 bg-gray-dark p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-grey-light rounded-full flex items-center justify-center text-2xl font-bold">
                        {user.username.charAt(0)}
                    </div>
                    <h1 className="ml-4 text-2xl font-bold">{user.username}</h1>
                    <span className="ml-2 text-lg">🇵🇱</span>
                </div>

                {/* Action Buttons and Activities */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Left Column: Action Buttons */}
                    <div className="grid gap-4">
                        <button className="bg-grey-light text-green-green py-4 rounded-lg hover:bg-green-500 transition-all">
                            Plant a tree
                        </button>
                        <button className="bg-grey-light text-green-green py-4 rounded-lg hover:bg-green-500 transition-all">
                            EkoCalculator
                        </button>
                        <button className="bg-grey-light text-green-green py-4 rounded-lg hover:bg-green-500 transition-all">
                            EkoMaps
                        </button>
                        <button className="bg-grey-light text-green-green py-4 rounded-lg hover:bg-green-500 transition-all">
                            Socials
                        </button>
                    </div>

                    {/* Right Column: Activity Stats */}
                    <div className="space-y-4">
                        <div className="bg-gray-light p-6 rounded-lg text-center shadow-md">
                            <div className="text-green-green text-3xl font-bold">#26</div>
                            <p>Graj</p>
                            <p className="text-xl font-bold">69</p>
                        </div>

                        <div className="bg-gray-dark p-6 rounded-lg text-center shadow-md">
                            <div className="text-orange-500 text-3xl font-bold">🌳</div>
                            <p>Wirtualny las</p>
                            <p className="text-xl font-bold"><span className="text-green-green">1757</span> posadzonych drzew</p>
                        </div>
                    </div>
                </div>

                {/* Options Section */}
                <div className="grid gap-4 mb-8 bg-gray-dark p-6 rounded-lg shadow-md">
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:bg-grey-light transition-all">
                        <span>akcja 1</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:bg-grey-light transition-all">
                        <span>akcja 2</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:bg-grey-light transition-all">
                        <span>akcja 3</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:bg-grey-light transition-all">
                        <span className="ml-3">akcja 4</span>
                    </button>
                </div>

                <div className="bg-gray-light p-6 rounded-lg shadow-md text-center">
                    <Link href="../dash/profile/" className="text-xl font-bold hover:underline">
                        Profile options
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;