"use client";

import React from 'react';

interface PlantActionsProps {
    plantId: string;
    onWater: (plantId: string) => void;
    onFertilize: (plantId: string) => void;
}

const PlantActions: React.FC<PlantActionsProps> = ({ plantId, onWater, onFertilize }) => {
    const handleWater = () => {
        onWater(plantId);
    };

    const handleFertilize = () => {
        onFertilize(plantId);
    };

    return (
        <div>
            <button onClick={handleWater}>Podlej roślinę</button>
            <button onClick={handleFertilize}>Nawóz</button>
        </div>
    );
};

export default PlantActions;
