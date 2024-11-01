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
        <div className="min-h-screen bg-grey-dark">
            <Head>
                <title>{user.username}&apos;s Dashboard</title>
            </Head>

            <main className="container mx-auto px-4 py-8 bg-gray-dark">
                {/* Profile Header */}
                <div className="flex items-center mb-6">
                    {/* Avatar */}
                    <div className="bg-gray-dark w-16 h-16 rounded-full">avatar</div>
                    {/* Profile Name */}
                    <h1 className="ml-4 text-xl font-bold">{user.username}</h1>
                    <span className="ml-2">🇵🇱</span>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Play Section */}
                    <div className="bg-gray-light p-4 rounded-lg text-center">
                        <div className="text-green-green text-2xl font-bold">#26</div>
                        <p>Graj</p>
                        <p className="text-xl font-bold">69</p>
                    </div>

                    {/* Tasks Section */}
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-orange-500 text-2xl font-bold">tree_icon</div>
                        <p>Wirtualny las</p>
                        <p className="text-xl font-bold">1757 posadzonych drzew</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="bg-green-green text-black p-4 rounded-lg">
                        Plant a tree
                    </button>


                    <button className="bg-green-green text-black p-4 rounded-lg">
                        EkoCalcualtor
                    </button>

                    <button className="bg-green-green text-black p-4 rounded-lg">
                        EkoMaps
                    </button>

                    <button className="bg-green-green text-black p-4 rounded-lg">
                        Socials
                    </button>
                </div>

                {/* Options Section */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                        <span>akcja 1</span>
                    </button>

                    {/* New Game */}
                    <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                        <span>akcja 2</span>
                    </button>

                    {/* Play with Bots */}
                    <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                        <span>akcja 3</span>
                    </button>

                    {/* Play with Friends */}
                    <button className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                        <span>akcja 4</span>
                    </button>
                </div>

                {/* Profile Options Link */}
                <div className="bg-gray-light rounded-lg shadow-lg p-6">
                    <Link href="../dash/profile/"  className="text-xl font-bold text-black">Profile options</Link>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
