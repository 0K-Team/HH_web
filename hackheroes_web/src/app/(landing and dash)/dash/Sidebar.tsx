"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Sidebar() {
    const handleMouseEnter = () => {
    };

    const handleMouseLeave = () => {
    };

    return (
        <div className="flex">
            <div className="slim-sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link href="../dash" className="icon">
                    <FontAwesomeIcon icon={faHouse} style={{color: "#29ff77",}} />
                    <span className="text">Panel użytkownika</span>
                </Link>
                <Link href="../../garden" className="icon">
                    <FontAwesomeIcon icon={faSeedling} style={{color: "#29ff77",}} />
                    <span className="text">Wirtualny ogródek</span>
                </Link>
                <Link href="../posts" className="icon">
                    <FontAwesomeIcon icon={faUser} style={{color: "#29ff77",}} />
                    <span className="text">Sociale</span>
                </Link>
            </div>
        </div>
    );
}