"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faSeedling,
    faUser,
    faCalculator,
    faMap,
    faQuestion,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { logout } from "@/app/api/user";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out z-50 ${
                isSidebarOpen ? "w-64" : "w-16"
            } flex flex-col items-start p-4 rounded-r-xl shadow-lg`}
        >
            <div className="flex items-center justify-between w-full mb-6">
                <span className={`text-xl font-bold text-green-500 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                    EcoHero
                </span>
                <button
                    onClick={handleToggleSidebar}
                    className="text-green-500 focus:outline-none text-2xl hover:text-green-300 transition duration-300"
                >
                    ☰
                </button>
            </div>

            <nav className="flex flex-col space-y-4 w-full">
                <SidebarLink href="../dash" icon={faHouse} label="Panel" isSidebarOpen={isSidebarOpen} />
                <SidebarLink href="../garden" icon={faSeedling} label="Ogródek" isSidebarOpen={isSidebarOpen} />
                <SidebarLink href="../posts" icon={faUser} label="Społeczność" isSidebarOpen={isSidebarOpen} />
                <SidebarLink href="../quiz" icon={faQuestion} label="Quiz" isSidebarOpen={isSidebarOpen} />
                <SidebarLink href="#" icon={faCalculator} label="EcoCalc" isSidebarOpen={isSidebarOpen} />
                <SidebarLink href="#" icon={faMap} label="EcoMap" isSidebarOpen={isSidebarOpen} />

                <button
                    onClick={logout}
                    className={`flex items-center rounded-lg transition-all duration-300 ${
                        isSidebarOpen ? "pl-10 pr-4 py-3 w-full" : "justify-center w-10 h-10"
                    } text-red-500 hover:bg-gray-700 hover:shadow-lg`}
                >
                    <FontAwesomeIcon icon={faUser} className="text-2xl" />
                    <span className={`ml-12 font-bold transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        Logout
                    </span>
                </button>
            </nav>
        </div>
    );
}

interface SidebarLinkProps {
    href: string;
    icon: IconDefinition;
    label: string;
    isSidebarOpen: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label, isSidebarOpen }) => {
    return (
        <Link href={href}>
            <a
                className={`relative flex items-center rounded-lg transition-all duration-300 ${
                    isSidebarOpen ? "pl-10 pr-4 py-3 w-full" : "justify-center w-10 h-10"
                } text-green-500 hover:bg-gray-700 hover:shadow-lg`}
            >
                <FontAwesomeIcon icon={icon} className="absolute left-4 text-2xl" />
                <span
                    className={`ml-12 font-bold transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}
                >
                    {label}
                </span>
            </a>
        </Link>
    );
}
