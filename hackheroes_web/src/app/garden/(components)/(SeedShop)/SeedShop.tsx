"use client";

import React, { useEffect, useState } from 'react';
import { Seed } from '../../types/types';
import { fetchSeeds, purchaseSeed } from '../../api/garden';

const SeedShop: React.FC = () => {
    const [seeds, setSeeds] = useState<Seed[]>([]);

    useEffect(() => {
        const loadSeeds = async () => {
            const seedsData = await fetchSeeds();
            setSeeds(seedsData);
        };
        loadSeeds();
    }, []);

    return (
        <div>
            <h2>Sklep z nasionami</h2>
            <div>
                {seeds.map((seed) => (
                    <div key={seed.id}>
                        <h4>{seed.name}</h4>
                        <button onClick={() => purchaseSeed(seed.id)}>Kup</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeedShop;