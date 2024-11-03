"use client";

import React, { useEffect, useState } from 'react';
import { fetchUserStats } from '../../api/garden';
import type { UserStats as UserStatsType } from '@/app/garden/types/types';

const UserStats: React.FC = () => {
    const [ecoPoints, setEcoPoints] = useState<number>(0);

    useEffect(() => {
        const loadUserStats = async () => {
            const stats: UserStatsType[] = await fetchUserStats();
            if (stats.length > 0) {
                setEcoPoints(stats[0].ecoPoints);
            }
        };
        loadUserStats();
    }, []);

    return (
        <div>
            <h2>Statystyki użytkownika</h2>
            <p>Punkty Eko: {ecoPoints}</p>
        </div>
    );
};

export default UserStats;