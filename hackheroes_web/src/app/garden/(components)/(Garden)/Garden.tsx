"use client";
// Importing types from types.ts
import { Plant, UserGardenData } from '../../types/types';
import { fetchGardenData } from '../../api/garden';
import { useEffect, useState } from "react";
import Image from "next/image";

// Example function using the imported types
const exampleFunction = (data: UserGardenData) => {
    console.log(data.user); // Accessing user property
    data.plants.forEach((plant: Plant) => {
        console.log(plant.name); // Accessing plant name
    });
    console.log(data.userActions.wateringCount); // Accessing user actions
};

// Example usage in a React component
const Garden: React.FC = () => {
    const [gardenData, setGardenData] = useState<UserGardenData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchGardenData();
            setGardenData(data);
            exampleFunction(data); // Using the example function here
        };
        fetchData();
    }, []);

    if (!gardenData) return <p>Loading...</p>;

    return (
        <div>
            <div className="p-6 grid grid-cols-3 gap-4">
                {gardenData.plants.map((plant: Plant) => (

                    <div key={plant._id} className=" mb-4 drop-shadow-lg text-green-green rounded bg-gray-dark pt-8 w-full m-0 flex flex-col items-center jusitfy-center h-full">
                        <Image
                            className="drop-shadow-lg rounded-lg"
                            src={`/api/v1/CDN/${plant.type}`}
                            alt={plant.name}
                        />
                        <h2 className="font-bold">{plant.name}</h2>
                        <p className="font-bold ">Growth Stage: {plant.growthStage}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Garden;