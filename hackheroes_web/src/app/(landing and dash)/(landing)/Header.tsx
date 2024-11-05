import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-[#1E1E1E] shadow-md">
            <div className="text-3xl text-white font-bold ml-[6vw]">EcoHero</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/projects" className="text-white text-xl hover:text-[#29FF77] duration-300">Projects</Link></li>
                    <li><Link href="/about" className="text-white text-xl hover:text-[#29FF77] duration-300]">About Us</Link></li>
                    <li><Link href="/campaigns" className="text-white text-xl hover:text-[#29FF77] duration-300">Campaigns</Link></li>
                </ul>
            </nav>
            <Link href ="/dash" className="bg-[#29FF77] font-bold text-black px-4 py-2 rounded hover:text-white transition duration-300 ease-in-out mr-[6vw]">Zaloguj się</Link>
        </header>
    );
};

export default Header;
