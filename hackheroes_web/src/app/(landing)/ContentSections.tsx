import React from 'react';

const ContentSections = () => {
    return (
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
    );
};

export default ContentSections;
