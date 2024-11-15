"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from '../types/user';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { fetchLoggedUser } from '../api/user';

const Header = () => {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        fetchLoggedUser().then(user => {
            if (user) setUser(user);
        }).catch(() => {
            setUser(undefined);
        });
    }, []);

    return (
        <header className="flex justify-between items-center p-4 md:px-8 lg:px-16 bg-[#1E1E1E] shadow-md">
            <Link href={'/'}>
                <div className="text-2xl md:text-3xl text-white font-bold ml-4 lg:ml-0">
                    EcoHero
                </div>
            </Link>
            <nav className="hidden md:flex">
                <ul className="flex space-x-4 lg:space-x-8">
                <li>
                        <Link href="/project">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">O projekcie</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/backend">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Backend</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/web">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Web</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/mobile">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Mobile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link href="/dash">
                {user ? (
                    <div className="ml-4 flex items-center space-x-1 lg:space-x-2 text-green-green hover:text-green-hover">
                        <span className="text-lg lg:text-xl font-bold">
                            {user.fullName.givenName} {user.fullName.familyName}&apos;s Dashboard
                        </span>
                        <FontAwesomeIcon icon={ faCaretRight } />
                    </div>
                ) : (
                    <span
                        className="bg-[#29FF77] font-bold text-black px-4 py-2 rounded hover:text-white transition duration-300 ease-in-out ml-4 lg:ml-0">
                        Zaloguj się
                    </span>
                )}
            </Link>
        </header>
    );
};

export default Header;
