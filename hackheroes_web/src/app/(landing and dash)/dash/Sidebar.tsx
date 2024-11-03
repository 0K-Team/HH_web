"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
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
        <div className="flex">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`fixed left-0 top-0 h-full bg-gray-dark text-white transition-transform duration-300 max-w-xs w-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <nav className="flex flex-col p-4 pt-[8vh]">
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        Virtual Forest
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        EcoCalculator
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        EcoMaps
                    </button>
                    <Link href="../posts" className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2 text-center">
                        Socials
                    </Link>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        akcja 4
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        akcja 4
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        akcja 4
                    </button>
                    <button className="font-bold bg-gray-light text-green-green p-5 rounded-lg hover:shadow-2xl transition-all mb-2">
                        akcja 4
                    </button>
                </nav>
            </div>

            <Link href="" className="absolute top-4 left-[4vh] font-bold bg-gray-light text-green-green py-2 px-4 rounded-lg hover:shadow-2xl transition-all" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <FontAwesomeIcon className="pr-2" icon={faHouse} style={{color: "#29ff77",}} />
                Panel użytkownika
            </Link>
        </div>
    );
}