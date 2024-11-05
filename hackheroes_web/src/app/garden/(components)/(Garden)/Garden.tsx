"use client";
import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import { Plant, UserActions } from '../../types/types';
import { fetchGardenData } from '../../api/garden'; // Importowanie funkcji z `api.ts`

const Garden: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [userActions, setUserActions] = useState<UserActions | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Wywołanie funkcji do pobrania danych z API
        const loadGardenData = async () => {
            try {
                const data = await fetchGardenData(); // Pobieranie danych za pomocą funkcji z `api.ts`
                setPlants(data.plants);
                setUserActions(data.userActions);
                setError(null);
            } catch (err) {
                setError('Failed to fetch garden data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadGardenData();
    }, []);

    // Renderowanie stanu ładowania lub błędu
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="ml-86">
            <h1>Your Garden</h1>
            <div className="plants-grid">
                {plants.map((plant) => (
                    <PlantCard key={plant._id} plant_id={plant._id} growth_stage={plant.growthStage} name={plant.name}/>
                ))}
            </div>
            <div className="user-actions">
                <h2>Actions Available</h2>
                <p>Watering: {userActions?.wateringCount}/{userActions?.wateringMaxCount}</p>
                <p>Fertilizing: {userActions?.fertilizingCount}/{userActions?.fertilizingMaxCount}</p>
                <p>Weed Removal: {userActions?.weedsRemoved}/{userActions?.weedsMaxRemoved}</p>
            </div>
        </div>
    );
};

export default Garden;