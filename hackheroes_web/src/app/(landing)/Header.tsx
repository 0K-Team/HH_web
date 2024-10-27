import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="text-xl font-bold ml-[6vw]">EcoHero</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/projects" className="hover:text-green-dark">  Projects</Link></li>
                    <li><Link href="/about" className="hover:text-green-dark">About Us</Link></li>
                    <li><Link href="/campaigns" className="hover:text-green-dark">Campaigns</Link></li>
                </ul>
            </nav>
            <button className="bg-green text-white px-4 py-2 rounded">Get Involved</button>
        </header>
    );
};

export default Header;
