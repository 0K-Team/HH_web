"use client";

import React, { useEffect, useState } from 'react';
import { Plant } from '../../types/types';
import { fetchPlantsData } from '../../api/garden';

interface PlantDetailProps {
    plantId: string;
}

const PlantDetail: React.FC<PlantDetailProps> = ({ plantId }) => {
    const [plantDetails, setPlantDetails] = useState<Plant | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const plants = await fetchPlantsData();
            const plant = plants.find(p => p._id === plantId);
            setPlantDetails(plant || null);
        };
        fetchData();
    }, [plantId]);

    if (!plantDetails) return <p>Ładowanie...</p>;

    return (
        <div>
            <h2>{plantDetails.name}</h2>
            <p>{plantDetails.type}</p>
            <p>Etap wzrostu: {plantDetails.growthStage}</p>
            <p>Można zebrać? : {plantDetails.harvestable}</p>
            {/* Można dodać więcej szczegółów */}
        </div>
    );
};

export default PlantDetail;