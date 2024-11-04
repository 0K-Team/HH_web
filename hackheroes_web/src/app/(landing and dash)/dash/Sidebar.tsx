"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSeedling, faUser, faCalculator, faMap } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`fixed top-0 left-0 h-full bg-gray-dark text-white transition-all duration-300 ${isSidebarOpen ? "w-48" : "w-20"} flex flex-col items-start p-4 z-50`}>
            <nav className="flex flex-col space-y-4 mt-10">
                <Link href="../dash" className="absolute top-4 left-[4vh] font-bold bg-gray-light text-green-green py-2 px-4 rounded-lg hover:shadow-2xl transition-all" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <FontAwesomeIcon className="pr-2" icon={faHouse} style={{color: "#29ff77",}} />
                    Panel użytkownika
                </Link>
                <Link href="../../garden">
                    <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-white transition-all text-green-green hover:shadow-lg w-full">
                        <FontAwesomeIcon icon={faSeedling} className="text-2xl text-green-600" />
                        {isSidebarOpen && <span className="ml-4 font-bold">Wirtualny ogródek</span>}
                    </button>
                </Link>
                <Link href="../posts">
                    <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-white transition-all text-green-green hover:shadow-lg w-full">
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-green-600" />
                        {isSidebarOpen && <span className="ml-4 font-bold">Sociale</span>}
                    </button>
                </Link>
                <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-white transition-all text-green-green hover:shadow-lg w-full">
                    <FontAwesomeIcon icon={faCalculator} className="text-2xl text-green-600" />
                    {isSidebarOpen && <span className="ml-4 font-bold">EcoCalculator</span>}
                </button>
                <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-white transition-all text-green-green hover:shadow-lg w-full">
                    <FontAwesomeIcon icon={faMap} className="text-2xl text-green-600" />
                    {isSidebarOpen && <span className="ml-4 font-bold">EcoMaps</span>}
                </button>
            </nav>
        </div>
    );
}