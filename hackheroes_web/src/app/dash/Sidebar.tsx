"use client";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSeedling, faUser, faCalculator, faMap, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { logout } from "@/app/api/user";

interface SidebarButtonProps {
    href: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconDefinition;
    label: string;
    isSidebarOpen: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ href, icon, label, isSidebarOpen }) => (
    <Link href={href}>
        <button className={`relative flex items-center rounded-lg transition-all duration-300 mt-2 h-14 ${isSidebarOpen ? "pl-10 pr-4 bg-gray-dark w-full" : "justify-center"} text-green-green hover:bg-gray-lighter hover:shadow-lg`}>
            <FontAwesomeIcon icon={icon} className="absolute left-4 text-2xl text-green-green" />
            <span className={`ml-12 font-bold transition-opacity w-48 flex duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"} whitespace-nowrap`}>
                {label}
            </span>
        </button>
    </Link>
);

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsSidebarOpen(true);
        }, 300); // Adjust the delay as needed
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
        setIsSidebarOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 h-full flex z-50">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-gray-light rounded-r-xl text-white transition-all duration-300 flex items-center justify-center w-20 shadow-lg"
            >
                <FontAwesomeIcon icon={faHouse} className="text-2xl text-green-green" />
            </div>
            <div
                className={`bg-gray-light rounded-r-xl text-white transition-all duration-300 ${isSidebarOpen ? "w-86" : "w-0"} flex-col items-start p-4 shadow-lg overflow-hidden`}
            >
                <SidebarButton href="../dash" icon={faHouse} label="Panel użytkownika" isSidebarOpen={isSidebarOpen} />
                <SidebarButton href="../garden" icon={faSeedling} label="Wirtualny ogródek" isSidebarOpen={isSidebarOpen} />
                <SidebarButton href="../posts" icon={faUser} label="Sociale" isSidebarOpen={isSidebarOpen} />
                <SidebarButton href="../calculator" icon={faCalculator} label="EcoCalculator" isSidebarOpen={isSidebarOpen} />
                <SidebarButton href="../map" icon={faMap} label="EcoMaps" isSidebarOpen={isSidebarOpen} />
                <span onClick={logout}>
                    <SidebarButton href="#" icon={faSignOutAlt} label="Logout" isSidebarOpen={isSidebarOpen} />
                </span>
            </div>
        </div>
    );
}