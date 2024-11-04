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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`fixed top-0 left-0 h-full bg-gray-light text-white transition-all duration-500 ${isSidebarOpen ? "w-56" : "w-24"} flex flex-col items-start p-4 z-50 shadow-lg`}>
            <nav className="flex flex-col space-y-4 mt-10">
                <Link href="../dash">
                    <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-gray-300 transition-all text-green-green hover:shadow-lg w-full">
                        <FontAwesomeIcon icon={faHouse} className="text-2xl text-green-600" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                            Panel użytkownika
                        </span>
                    </button>
                </Link>

                <Link href="../../garden">
                    <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-gray-300 transition-all text-green-green hover:shadow-lg w-full">
                        <FontAwesomeIcon icon={faSeedling} className="text-2xl text-green-600" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                            Wirtualny ogródek
                        </span>
                    </button>
                </Link>

                <Link href="../posts">
                    <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-gray-300 transition-all text-green-green hover:shadow-lg w-full">
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-green-600" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                            Sociale
                        </span>
                    </button>
                </Link>

                <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-gray-300 transition-all text-green-green hover:shadow-lg w-full">
                    <FontAwesomeIcon icon={faCalculator} className="text-2xl text-green-600" />
                    <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        EcoCalculator
                    </span>
                </button>

                <button className="flex items-center p-3 rounded-lg bg-gray-light hover:bg-gray-300 transition-all text-green-green hover:shadow-lg w-full">
                    <FontAwesomeIcon icon={faMap} className="text-2xl text-green-600" />
                    <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        EcoMaps
                    </span>
                </button>
            </nav>
        </div>
    );
}