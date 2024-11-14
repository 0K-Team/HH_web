"use client";
import Link from "next/link";
import Image from 'next/image';
import logoTransparent from './(content)/logoTransparent.svg';
import React, { useEffect, useState } from "react";
import { qrConnection } from "../api/qr";
import { useQRCode } from "next-qrcode";
import { redirect } from "next/navigation";

const Login = () => {
    const [ilt, setIlt] = useState("");

    const { Canvas } = useQRCode();

    useEffect(() => {
        qrConnection((token) => {
            setIlt(token)
        }, () => {
            redirect("/dash");
        });
    }, []);

    return (
        <section className="flex justify-center items-center bg-[#1E1E1E] min-h-screen relative overflow-hidden">
            <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full top-[-20vh] right-[13%] blur-3xl"></div>
            <div className="absolute w-[45vh] h-[45vh] bg-[#29FF77] opacity-10 rounded-full top-[-25vh] left-[8%] blur-3xl"></div>
            <div className="absolute w-[40vh] h-[40vh] bg-[#29FF77] opacity-10 rounded-full bottom-2 left-2 blur-3xl"></div>
            <div className="absolute w-[55vh] h-[55vh] bg-[#29FF77] opacity-10 rounded-full bottom-[-5vh] right-2 blur-3xl"></div>

            <div className="bg-[#2A2A2A] px-8 py-12 sm:px-12 sm:py-16 rounded-2xl border-4 border-[#29FF77] shadow-lg w-full max-w-md text-center z-10">
                <div className="flex justify-center items-center mb-6">
                    <Image
                        src={logoTransparent}
                        alt="Logo"
                        width={192}
                        height={192}
                        className="object-contain"
                    />
                </div>
                <h2 className="text-white font-semibold text-xl sm:text-2xl mb-8">
                    Zaloguj się używając <br/> jednego ze sposobów:
                </h2>
                <Link href="https://ecohero.q1000q.me/api/v1/auth/google" passHref>
                    <span className="block text-lg font-semibold text-center text-black bg-[#29FF77] py-3 rounded-full mb-4 transition duration-300 ease-in-out transform hover:bg-[#22cc66] hover:scale-105 hover:text-white shadow-lg">
                        Google
                    </span>
                </Link>
                <Link href="https://ecohero.q1000q.me/api/v1/auth/facebook" passHref>
                    <span className="block text-lg font-semibold text-center text-black bg-[#29FF77] py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-[#22cc66] hover:scale-105 hover:text-white shadow-lg">
                        Meta (Facebook)
                    </span>
                </Link>
                <div className="flex justify-center items-center pt-3 rounded-l">
                    {ilt && <Canvas
                        text={ilt}
                    />}
                </div>
            </div>
        </section>
    );
};

export default Login;
