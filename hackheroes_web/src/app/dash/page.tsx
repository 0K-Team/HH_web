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
        <div className="flex flex-col min-h-screen bg-gray-dark text-white">
            <Head>
                <title>{user.username}&apos;s Dashboard</title>
            </Head>

            <main className="flex flex-col flex-grow container mx-auto px-4 py-8">
                {/* Profile Header */}
                <div className="flex items-center mb-8 bg-gray-dark p-4 rounded-lg">
                    <div className="w-16 h-16 bg-gray-light rounded-full flex items-center justify-center text-2xl font-bold">
                        {user.fullName.givenName.charAt(0)}{user.fullName.familyName.charAt(0)}
                    </div>
                    <h1 className="ml-4 text-2xl font-bold justify-end">{user.username}</h1>
                    <span className="ml-2 text-lg">🇵🇱</span>
                </div>

                {/* Action Buttons and Activities */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Left Column: Action Buttons */}
                    <div className="grid gap-4 font-bold">
                        <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                            Virtual Forest
                        </button>
                        <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                            EcoCalculator
                        </button>
                        <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                            EcoMaps
                        </button>
                        <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                            Socials
                        </button>
                    </div>

                    {/* Right Column: Activity Stats */}
                    <div className="space-y-4">
                        <Link href="../dash/daily_chall" className="p-6 rounded-lg text-center">
                            <div className="text-green-green text-3xl font-bold">15%</div>
                            <p className="text-xl font-bold ml-2"> Dzienne wyzwanie</p>
                        </Link>

                        <div className="bg-gray-dark p-6 rounded-lg text-center">
                            <div className="text-orange-500 text-3xl font-bold">🌳</div>
                            <p>Wirtualny las</p>
                            <p className="text-xl font-bold"><span className="text-green-green">1757</span> posadzonych drzew</p>
                        </div>
                    </div>
                </div>

                {/* Options Section */}
                <div className="grid gap-4 mb-8 bg-gray-dark p-6 rounded-lg ">
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:shadow-2xl transition-all">
                        <span className="ml-3">akcja 4</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:shadow-2xl transition-all">
                        <span className="ml-3">akcja 4</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:shadow-2xl transition-all">
                        <span className="ml-3">akcja 4</span>
                    </button>
                    <button className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:shadow-2xl transition-all">
                        <span className="ml-3">akcja 4</span>
                    </button>
                </div>


                    <Link href="../dash/profile/" className="bg-gray-light p-6 rounded-lg shadow-md text-center text-xl font-bold hover:underline">
                        Profile options
                    </Link>
            </main>
        </div>
    );
};

export default Dashboard;