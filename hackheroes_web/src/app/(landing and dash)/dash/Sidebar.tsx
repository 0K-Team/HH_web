"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import "../globals.css"; // Importing the globals.css file

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen">
            <div
                className={`fixed top-0 left-0 flex flex-col justify-between p-4 space-y-6 bg-black h-screen transition-width duration-300 ${isSidebarOpen ? 'w-[200px]' : 'w-[80px]'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <nav className="flex flex-col p-4 pt-[8vh]">
                    <Link href="../dash" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-all">
                        <FontAwesomeIcon icon={faHouse} className="text-2xl text-white" />
                        {isSidebarOpen && <span className="text-white">Panel użytkownika</span>}
                    </Link>
                    <Link href="../../garden" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-all">
                        <FontAwesomeIcon icon={faSeedling} className="text-2xl text-white" />
                        {isSidebarOpen && <span className="text-white">Wirtualny ogródek</span>}
                    </Link>
                    <Link href="../posts" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-all">
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-white" />
                        {isSidebarOpen && <span className="text-white">Sociale</span>}
                    </Link>
                </nav>
            </div>
        </div>
    );
}