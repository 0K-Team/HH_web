import React from 'react';
import Image from 'next/image';
import shrek from './shrek.gif'
const Section2 = () => {
    return (
        <>
            <section className="p-[20vh] bg-white w-full flex place-content-evenly">
                <div className="flex items-center p-8 space-x-[10%]">

                    <Image
                        src={shrek}
                        alt="szrek"
                        width={500}
                        height={500}
                    />
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-green-600 bg">Udowodnione naukowo</h2>
                        <p>Łączymy udowodnione naukowo metody nauczania oraz ciekawe, zabawne treści...</p>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};


export default Section2;