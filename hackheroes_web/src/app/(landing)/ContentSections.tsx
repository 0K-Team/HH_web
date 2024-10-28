import React from 'react';

const ContentSections = () => {
    return (
        <>
            <section className="p-8 bg-gray-light">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-xl">4855 trees planted</h2>
                        <p>Our ongoing efforts to reforest urban areas.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-xl">Educational Programs</h2>
                        <p>Join our workshops and learn about sustainability.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm bg-white">
                        <h2 className="font-bold text-xl">Donate and Help</h2>
                        <p>Support our projects through donations.</p>
                    </div>
                </div>
            </section>
            <section className="p-8 bg-white">
                <div className="flex items-center p-8">
                    <div className="w-1/2">
                        <h2 className="text-4xl font-bold text-green-600">Udowodnione naukowo</h2>
                        <p>Łączymy udowodnione naukowo metody nauczania oraz ciekawe, zabawne treści...</p>
                    </div>
                    <img src="/duolingo-scientific.png" alt="Ikonki" className="w-1/2"/>
                </div>
            </section>
            <section className="p-8 bg-white">
                <div className="flex items-center space-x-6">
                    <img src="/duolingo-scientific.png" alt="Ikonki" className="w-3/5"/>
                    <div className="w-1/2 ">
                        <h2 className="text-4xl font-bold text-green-600 ">Udowodnione naukowo</h2>
                        <p>Łączymy udowodnione naukowo metody nauczania oraz ciekawe, zabawne treści...</p>
                    </div>

                </div>
            </section>
        </>
    )
        ;
};


export default ContentSections;
