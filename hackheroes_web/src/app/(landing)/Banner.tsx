import React from 'react';
import Image from 'next/image';
import headerContent from './(content)/headerContent.png';
import Link from "next/link";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center text-center bg-[#1E1E1E] p-8 lg:p-16">
            <div className="flex flex-col lg:mr-8 justify-center items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    <span className="text-white">Dbanie o</span> <span className="text-[#29FF77]">naszą planetę</span><br/>
                    <span className="text-white">nigdy nie było takie</span> <span className="text-[#29FF77]">łatwe!</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light my-6">
                    <span className="text-white">EcoHero to najlepsza platforma do edukacji, uprawy i</span><br/>
                    <span className="text-white">wszystkiego związanego z ekologią.</span>
                </h2>
                <Link href="/dash">
                <span className="bg-[#29FF77] font-bold text-black text-2xl px-4 py-2 rounded hover:text-white transition duration-300 ease-in-out">
                    Stwórz konto za darmo
                </span>
                </Link>
            </div>
            <div className="w-full max-w-[400px] lg:max-w-[550px]">
                <Image
                    src={headerContent}
                    alt="Header Content"
                    width={550}
                    height={550}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default Banner;
