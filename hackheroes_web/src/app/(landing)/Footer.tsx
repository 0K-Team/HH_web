"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from '../types/user';
import { fetchLoggedUser } from '../api/user';

const Footer = () => {
    const [, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        fetchLoggedUser().then(user => {
            if (user) setUser(user);
        }).catch(() => {
            setUser(undefined);
        });
    }, []);

    return (
        <footer className="items-center p-4 md:px-8 lg:px-16 bg-[#1E1E1E] shadow-md shadow-top">
            <nav className="flex items-center justify-center">
                <ul className="flex space-x-7">
                    <li>
                        <Link href="/Tos">
                            <span className="text-gray-500 text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">
                                Terms of Service
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Privacy">
                            <span className="text-gray-500 text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">
                                Polityka prywatności
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Cookies">
                            <span className="text-gray-500 text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">
                                Informacje o cookies
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
