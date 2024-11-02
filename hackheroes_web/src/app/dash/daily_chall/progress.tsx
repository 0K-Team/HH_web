
// ProgressComponent.tsx
import React from "react";
import Image from "next/image";

interface ProgressComponentProps {
    progress: number;
    itemsSorted: number;
    totalItems: number;
}

const ProgressComponent: React.FC<ProgressComponentProps> = ({
                                                                 progress,
                                                                 itemsSorted,
                                                                 totalItems,
                                                             }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-xl mb-6">
                Daily challenge
            </div>
            <div className="text-3xl font-bold text-green-500 mb-2">
                {progress}% zrobione
            </div>
            <div className="relative w-32 h-32">
                <div
                    className="absolute inset-0 rounded-full border-4 border-gray-700"
                    style={{
                        borderColor: "#00ff00",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                />
                <Image
                    src="/path/to/trash-bin-icon.png" // zamień na ścieżkę do swojej ikony
                    alt="Recycling bin"
                    className="w-32 h-32 object-contain"
                />
            </div>
            <p className="mt-4 text-gray-300 text-lg">
                Posegregowałeś {itemsSorted} na {totalItems} odpadów
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
                Segreguj dalej
            </button>
        </div>
    );
};

export default ProgressComponent;