"use client";

import React, { useEffect, useState } from 'react';
import { PlantDetails } from '../../types/types';
import { fetchPlantDetails } from '../../api/garden';

interface PlantDetailProps {
    plantId: string;
}

const PlantDetail: React.FC<PlantDetailProps> = ({ plantId }) => {
    const [plantDetails, setPlantDetails] = useState<PlantDetails | null>(null);

    useEffect(() => {
        const loadPlantDetails = async () => {
            const data = await fetchPlantDetails(plantId);
            setPlantDetails(data);
        };
        loadPlantDetails();
    }, [plantId]);

    if (!plantDetails) return <p>Ładowanie...</p>;

    return (
        <div>
            <h2>{plantDetails.name}</h2>
            <p>{plantDetails.description}</p>
            <p>Etap wzrostu: {plantDetails.growth_stage}</p>
            {/* Można dodać więcej szczegółów */}
        </div>
    );
};

export default PlantDetail;