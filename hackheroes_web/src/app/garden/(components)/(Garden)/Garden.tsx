"use client";
// Importing types from types.ts
import { Plant, UserGardenData } from '../../types/types';
import { fetchGardenData } from '../../api/garden';
import { useEffect, useState } from "react";

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
        <div className="grid grid-cols-3">
            <h1>User: {gardenData.user}</h1>
            <div>
                {gardenData.plants.map((plant: Plant) => (
                    <div key={plant._id} className="text-green-green rounded bg-gray-dark">
                        <h2 >{plant.name}</h2>
                        <p>Growth Stage: {plant.growthStage}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>User Actions</h2>
                <p>Watering Count: {gardenData.userActions.wateringCount}</p>
            </div>
        </div>
    );
};

export default Garden;