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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`fixed top-0 left-0 h-full bg-gray-dark text-white transition-all duration-500 ${isSidebarOpen ? "w-64" : "w-20"} flex flex-col items-start p-4 z-50 shadow-lg`}>
            <nav className="flex flex-col space-y-4 mt-10">
                <Link href="../dash">
                    <button
                        className={`flex items-center rounded-lg transition-all duration-300 ${isSidebarOpen ? "p-3 bg-gray-light w-full" : "p-0 w-10 justify-center"} text-green-green hover:bg-gray-light hover:shadow-lg`}
                    >
                        <FontAwesomeIcon icon={faHouse} className="text-2xl text-green-green" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                            Panel użytkownika
                        </span>
                    </button>
                </Link>

                <Link href="../../garden">
                    <button
                        className={`flex items-center rounded-lg transition-all duration-300 ${isSidebarOpen ? "p-3 bg-gray-light w-full" : "p-0 w-10 justify-center"} text-green-green hover:bg-gray-light hover:shadow-lg`}
                    >
                        <FontAwesomeIcon icon={faSeedling} className="text-2xl text-green-green" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                            Wirtualny ogródek
                        </span>
                    </button>
                </Link>

                <Link href="../posts">
                    <button
                        className={`flex items-center rounded-lg transition-all duration-300 ${isSidebarOpen ? "p-3 bg-gray-light w-full" : "p-0 w-10 justify-center"} text-green-green hover:bg-gray-light hover:shadow-lg`}
                    >
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-green-green" />
                        <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                            Sociale
                        </span>
                    </button>
                </Link>

                <button
                    className={`flex items-center rounded-lg transition-all duration-300 ${isSidebarOpen ? "p-3 bg-gray-light w-full" : "p-0 w-10 justify-center"} text-green-green hover:bg-gray-light hover:shadow-lg`}
                >
                    <FontAwesomeIcon icon={faCalculator} className="text-2xl text-green-green" />
                    <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                        EcoCalculator
                    </span>
                </button>

                <button
                    className={`flex items-center rounded-lg transition-all duration-300 ${isSidebarOpen ? "p-3 bg-gray-light w-full" : "p-0 w-10 justify-center"} text-green-green hover:bg-gray-light hover:shadow-lg`}
                >
                    <FontAwesomeIcon icon={faMap} className="text-2xl text-green-green" />
                    <span className={`ml-4 font-bold transition-opacity duration-500 delay-200 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                        EcoMaps
                    </span>
                </button>
            </nav>
        </div>
    );
}
