"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen w-full bg-[#fdfbf9]">
            <div className={`fixed top-0 left-0 flex flex-col justify-between p-4 space-y-6 bg-black h-screen transition-width duration-300 ${isSidebarOpen ? 'w-[200px]' : 'w-[80px]'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <nav className="flex flex-col p-4 pt-[8vh]">
                    <Link href="../dash" className="absolute top-4 left-[4vh] font-bold bg-gray-light text-green-green py-2 px-4 rounded-lg hover:shadow-2xl transition-all" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon className="pr-2" icon={faHouse} style={{color: "#29ff77",}} />
                        Panel użytkownika
                    </Link>
                    <Link href="../../garden" className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2 text-center">
                        <FontAwesomeIcon className="pr-2" icon={faSeedling} style={{color: "#29ff77",}} />
                        Wirtualny ogródek
                    </Link>
                    <Link href="../posts" className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2 text-center">
                        <FontAwesomeIcon className="pr-2" icon={faUser} style={{color: "#29ff77",}} />
                        Sociale
                    </Link>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        EcoCalculator
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        EcoMaps
                    </button>
                </nav>
            </div>
        </div>
    );
}