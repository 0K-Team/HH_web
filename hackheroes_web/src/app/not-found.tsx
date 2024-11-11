import Header from "@/app/(landing)/Header";
import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
            <Header/>
            <div
                className="flex flex-col items-center justify-center text-center text-white py-12 px-6">
                <h1 className="text-8xl font-extrabold text-gradient bg-clip-text text-transparent mt-4">404</h1>
                <p className="text-3xl font-semibold mt-4">Ups! Strona Nie Znaleziono</p>
                <p className="text-lg my-4 max-w-md mx-auto">Strona, której szukasz, nie istnieje lub została
                    przeniesiona. Sprawdź adres URL lub wróć do strony głównej.</p>
                <Link href="/">
                <span
                    className="bg-[#29FF77] font-bold text-black px-4 py-2 rounded hover:text-white transition duration-300 ease-in-out ml-4 lg:ml-0">
                    Wróć do strony głównej
                </span>
                </Link>
            </div>

        </div>
    );
}
