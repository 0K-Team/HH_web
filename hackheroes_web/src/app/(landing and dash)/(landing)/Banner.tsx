import React from 'react';
import Image from 'next/image';
import headerContent from './(content)/headerContent.png';


const Banner = () => {
    return (
        <section
            className="content-center text-center py-16 bg-[#1E1E1E]" style={{height: 'clamp(78vh, 82vh, 84vh)', fontSize: 'clamp(1rem, 2vw + 1rem, 3rem)', padding: 'clamp(10px, 5vw, 40px)', }}>
            <div className="inline-flex">
                <div>
                    <h1 className="text-7xl font-bold mb-4" style={{fontSize: 'clamp(2rem, 4vw + 1rem, 4.5rem)', lineHeight: 'clamp(2.5rem, 5vw, 5rem)'}}>
                        <span className="text-white">Dbanie o</span> <span
                        className="text-[#29FF77]">naszą planetę</span><br/>
                        <span className="text-white">nigdy nie było takie</span> <span
                        className="text-[#29FF77]">łatwe!</span>
                    </h1>
                    <h2 className="font-light" style={{fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)'}}>
                        <span className="text-white font-light text-3xl">EcoHero to najlepsza platforma do edukacji, uprawy i</span><br/>
                        <span className="text-white font-light text-3xl">wszystkiego związanego z ekologią.</span>
                    </h2><br/>
                    <button
                        className="bg-[#29FF77] text-black text-2xl font-bold px-6 py-3 rounded-full hover:text-white transition duration-300 ease-in-out">Stwórz
                        konto za darmo
                    </button>
                </div>
                <div className="relative bottom-[5vh] w-full max-w-[550px]">
                    <Image
                           src={headerContent}
                           alt="Header Content"
                           width={550}
                           height={550}
                           layout="responsive"
                    />
                </div>
            </div>
        </section>

    )
        ;
};

export default Banner;
