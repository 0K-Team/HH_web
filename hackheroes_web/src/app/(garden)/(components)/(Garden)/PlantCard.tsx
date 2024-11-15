import React from 'react';

import { Plant } from '../../types/types';


const PlantCard: React.FC<Plant> = ({ name, growthStage, _id }) => {
    return (
        <div className={`plant-card ${growthStage}`}>
            <h3>{name}{_id}</h3>
            <p>Etap wzrostu: {growthStage}</p>
            {/* Logika renderująca różne elementy w zależności od growth_stage */}
        </div>
    );
};

export default PlantCard;