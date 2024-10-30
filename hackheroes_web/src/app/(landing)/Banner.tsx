import React from 'react';
import Image from 'next/image';
import headerContent from '../(landing)/(content)/headerContent.png';


const Banner = () => {
    return (
        <section className="content-center text-center py-16 bg-[#1E1E1E] h-[81vh]">
            <div className="inline-flex">
                    <div>
                        <h1 className="text-7xl font-bold mb-4">
                            <span className="text-white">Dbanie o</span> <span
                            className="text-[#29FF77]">naszą planetę</span><br/>
                            <span className="text-white">nigdy nie było takie</span> <span
                            className="text-[#29FF77]">łatwe!</span>
                        </h1>
                        <h2>
                            <span className="text-white font-light text-3xl">EcoHero to najlepsza platforma do edukacji, uprawy i</span><br/>
                            <span className="text-white font-light text-3xl">wszystkiego związanego z ekologią.</span>
                        </h2><br/>
                        <button className="bg-[#29FF77] text-black text-2xl font-bold px-6 py-3 rounded-full hover:text-white transition duration-300 ease-in-out">Stwórz konto za darmo</button>
                    </div>
                    <div>
                        <Image className="relative bottom-[5vh]"
                         src={headerContent}
                         alt="Header Content"
                         width={500}
                         height={500}
                        />
                    </div>
            </div>
        </section>

)
    ;
};

export default Banner;
