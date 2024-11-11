import React from 'react';
import Link from 'next/link';

const Header = () => {
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
                        <Link href="/projects">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Projekty</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">O nas</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/campaigns">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Kampanie</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/life">
                            <span
                                className="text-white text-lg lg:text-xl hover:text-[#29FF77] transition duration-300">Życie</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link href="/dash">
                <span
                    className="bg-[#29FF77] font-bold text-black px-4 py-2 rounded hover:text-white transition duration-300 ease-in-out ml-4 lg:ml-0">
                    Zaloguj się
                </span>
            </Link>
        </header>
    );
};

export default Header;
