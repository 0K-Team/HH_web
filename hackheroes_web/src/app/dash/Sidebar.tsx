import React, { useState } from "react";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full bg-gray-dark text-white transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="p-4" onClick={toggleSidebar}>
                    Close
                </button>
                <nav className="flex flex-col p-4">
                    <button className="py-2">Link 1</button>
                    <button className="py-2">Link 2</button>
                    <button className="py-2">Link 3</button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="ml-[250px] p-6">
                <button
                    className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all"
                    onClick={toggleSidebar}>
                    Toggle Sidebar
                </button>

                <div className="grid gap-4 font-bold">
                    <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                        Virtual Forest
                    </button>
                    <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                        EcoCalculator
                    </button>
                    <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                        EcoMaps
                    </button>
                    <button className="font-bold bg-gray-light text-green-green py-4 rounded-lg hover:shadow-2xl transition-all">
                        Socials
                    </button>
                </div>

                <div className="grid gap-4 mb-8 bg-gray-dark p-6 rounded-lg ">
                    {[...Array(4)].map((_, index) => (
                        <button
                            key={index}
                            className="bg-gray-light py-4 rounded-lg flex justify-between items-center hover:shadow-2xl transition-all">
                            <span className="ml-3">akcja {index + 1}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}