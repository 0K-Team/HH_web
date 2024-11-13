"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSeedling, faUser, faCalculator, faMap, faQuestion, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
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

    const handleMouseEnter = () => {
        setIsSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`fixed top-0 left-0 h-full bg-gray-light rounded-r-xl text-white transition-all duration-300 ${isSidebarOpen ? "w-86" : "w-20"} flex-col items-start p-4 z-50 shadow-lg`}>
            <SidebarButton href="../dash" icon={faHouse} label="Panel użytkownika" isSidebarOpen={isSidebarOpen} />
            <SidebarButton href="../garden" icon={faSeedling} label="Wirtualny ogródek" isSidebarOpen={isSidebarOpen} />
            <SidebarButton href="../posts" icon={faUser} label="Sociale" isSidebarOpen={isSidebarOpen} />
            <SidebarButton href="../quiz" icon={faQuestion} label="Quiz" isSidebarOpen={isSidebarOpen} />
            <SidebarButton href="../calculator" icon={faCalculator} label="EcoCalculator" isSidebarOpen={isSidebarOpen} />
            <SidebarButton href="#" icon={faMap} label="EcoMaps" isSidebarOpen={isSidebarOpen} />
            <a onClick={logout}>
                <SidebarButton href="#" icon={faSignOutAlt} label="Logout" isSidebarOpen={isSidebarOpen} />
            </a>
        </div>
    );
}
