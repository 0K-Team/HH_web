import React from 'react';

const Section2 = () => {
    return (
        <>
            <section className="p-[20vh] bg-green-light w-full flex place-content-evenly">
                <div className="flex items-center p-8 space-x-[10%]">
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-green-600 bg">Udowodnione naukowo</h2>
                        <p>Łączymy udowodnione naukowo metody nauczania oraz ciekawe, zabawne treści...</p>
                    </div>
                    <img src="/duolingo-scientific.png" alt="Ikonki" className="w-[50vh]"/>
                </div>
            </section>
        </>
    )
        ;
};


export default Section2;