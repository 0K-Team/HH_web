import React from 'react';

import { PlantCardProps } from '../../types/types';


const PlantCard: React.FC<PlantCardProps> = ({ name, growth_stage, plant_id }) => {
    return (
        <div className={`plant-card ${growth_stage}`}>
            <h3>{name}{plant_id}</h3>
            <p>Etap wzrostu: {growth_stage}</p>
            {/* Logika renderująca różne elementy w zależności od growth_stage */}
        </div>
    );
};

export default PlantCard;