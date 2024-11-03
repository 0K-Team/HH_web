"use client";
import React, { useEffect, useState } from 'react';
import { Plant } from '../../types/types';
import PlantCard from './PlantCard';
import { fetchPlants } from '@/app/game/api/garden';

const Garden: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const loadPlants = async () => {
            const data = await fetchPlants();
            setPlants(data);
        };
        loadPlants();
    }, []);

    return (
        <div>
            <h2>Twój Ogród</h2>
            <div>
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant_id={plant.id} {...plant} />
                ))}
            </div>
        </div>
    );
};

export default Garden;