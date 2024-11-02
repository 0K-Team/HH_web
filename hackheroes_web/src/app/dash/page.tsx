"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { User } from '../types/user';
import { fetchLoggedUser } from "@/app/api/user";
import Link from "next/link";


const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchLoggedUser()
            .then((user) => setUser(user));
    }, []);

    return !user ? (
        <h1>Loading...</h1>
    ) : (
        <div className="min-h-screen min-w-full bg-grey-dark m-0 p-0">
            <Head>
                <title>{user.username}&apos;s Dashboard</title>
            </Head>

            <div className="min-h-screen bg-grey-dark">
                <Head>
                    <title>{user.username}&apos;s Dashboard</title>
                </Head>

                <main className="container bg-gray-dark min-h-screen ">
                    {/* Profile Header */}
                    <div className="flex items-center mb-6">
                        {/* Avatar */}
                        <div className="bg-gray-dark w-16 h-16 rounded-full">avatar</div>
                        {/* Profile Name */}
                        <h1 className="ml-4 text-xl font-bold">{user.username}</h1>
                        <span className="ml-2">🇵🇱</span>
                    </div>

                    {/* Action Buttons and Activities */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="grid grid-cols-1 gap-3">
                            <button className="bg-grey-light text-green-green p-4 rounded-lg mb-4">
                                Plant a tree
                            </button>
                            <button className="bg-grey-light text-green-green p-4 rounded-lg mb-4">
                                EkoCalculator
                            </button>
                            <button className="bg-grey-light text-green-green p-4 rounded-lg mb-4">
                                EkoMaps
                            </button>
                            <button className="bg-grey-light text-green-green p-4 rounded-lg mb-4">
                                Socials
                            </button>
                        </div>

                        <div>
                            <div className="bg-gray-light p-4 rounded-lg text-center mb-4">
                                <div className="text-green-green text-2xl font-bold">#26</div>
                                <p>Graj</p>
                                <p className="text-xl font-bold">69</p>
                            </div>

                            <div className="bg-gray-dark p-4 rounded-lg text-center">
                                <div className="text-orange-500 text-2xl font-bold">tree_icon</div>
                                <p>Wirtualny las</p>
                                <p className="text-xl font-bold">1757 posadzonych drzew</p>
                            </div>
                        </div>
                    </div>

                    {/* Options Section */}
                    <div className="grid grid-cols-1 gap-4 mb-6 bg-gray-light p-4 rounded-lg">
                        <button className="bg-gray-dark p-4 rounded-lg flex items-center justify-between">
                            <span className="text-white">akcja 1</span>
                        </button>

                        <button className="bg-gray-dark p-4 rounded-lg flex items-center justify-between">
                            <span>akcja 2</span>
                        </button>

                        <button className="bg-gray-dark p-4 rounded-lg flex items-center justify-between">
                            <span>akcja 3</span>
                        </button>

                        <button className="bg-gray-dark p-4 rounded-lg flex items-center justify-between">
                            <span>akcja 4</span>
                        </button>
                    </div>

                    <div className="bg-gray-light rounded-lg shadow-lg p-6">
                        <Link href="../dash/profile/" className="text-xl font-bold">Profile options</Link>
                    </div>
                </main>
            </div>
        </div>
            );
            };

            export default Dashboard;
