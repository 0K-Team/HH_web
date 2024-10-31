"use client";
// pages/dashboard.tsx
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { User } from '../types/user';
import {fetchLoggedUser} from "@/app/(api)/user";

interface DashboardProps {
    user: User;
}

const Dashboard: React.FC<DashboardProps> = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchLoggedUser()
            .then((user) => setUser(user));
    }, []);

    return !user ? (
        <h1>qwertyui</h1>
    ) : (
        <div className="min-h-screen bg-black text-white">
            <Head>
                <title>{user.username}'s Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <div className="bg-green-100 rounded-lg shadow-lg p-6 mb-8">
                    <div className="flex items-center mb-6">
                        <div>ikonka</div>
                        <div>
                            <h1 className="text-3xl font-bold text-black">{user.fullName.givenName} {user.fullName.familyName}</h1>
                            <p className="text-gray-600">@{user.username}</p>
                        </div>
                    </div>
                    <p className="text-black">{user.bio || 'No bio available'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-green-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">Skills</h2>
                        <div className="flex flex-wrap">
                            {user.skills.map((skill, index) => (
                                <span key={index} className="bg-green-200 text-black px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-green-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">Achievements</h2>
                        <ul className="space-y-2">
                            {user.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-500 mr-2">🏆</span>
                                    <span className="text-black">{achievement.name}</span>
                                    <span className="text-gray-500 text-sm ml-auto">
                    {new Date(achievement.date_awarded).toLocaleDateString()}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-green-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">Notifications</h2>
                        <ul className="space-y-2">
                            {user.notifications.map((notification, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-500 mr-2">📢</span>
                                    <span className="text-black">{notification.title}</span>
                                    <span className="text-gray-500 text-sm ml-auto">
                    {new Date(notification.date).toLocaleDateString()}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-green-100 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">Preferred Topics</h2>
                        <div className="flex flex-wrap">
                            {user.preferred_topics.map((topic, index) => (
                                <span key={index} className="bg-green-200 text-black px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {topic}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const getServerSideProps = async () => {
    // Here you would fetch the user data from your API or database
    // For now, we'll use mock data
    const user: User = {
        id: '123456789012345',
        email: 'user@example.com',
        username: 'exampleuser',
        fullName: { givenName: 'John', familyName: 'Doe' },
        avatarHash: 'abcdef1234567890',
        provider: 'google',
        googleID: '987654321',
        bio: 'Enthusiastic learner and developer',
        skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
        achievements: [
            { name: 'First Project Completed', date_awarded: new Date('2023-01-15') },
            { name: 'Contributed to Open Source', date_awarded: new Date('2023-03-22') },
        ],
        notifications: [
            { title: 'New friend request', date: new Date('2023-05-01') },
            { title: 'You earned a new badge!', date: new Date('2023-05-03') },
        ],
        preferred_topics: ['Web Development', 'Machine Learning', 'Data Science'],
        points: 1500,
    };

    return user
};

export default Dashboard;
