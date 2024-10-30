import React from 'react';
import Image from 'next/image';
import imageSection2 from '../(content)/imageSection2.png';

const Section2 = () => {
    return (
        <>
            <section className="p-[20vh] bg-green-light w-full flex place-content-evenly">
                <div className="flex items-center p-8 space-x-[10%]">
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-green-600 bg">Udowodnione naukowo</h2>
                        <p>Łączymy udowodnione naukowo metody nauczania oraz ciekawe, zabawne treści...</p>
                    </div>
                    <Image
                        src={imageSection2}
                        alt="Section 2 Image"
                        width={500}
                        height={500}
                    />


                </div>
            </section>
        </>
    )
        ;
};


export default Section2;