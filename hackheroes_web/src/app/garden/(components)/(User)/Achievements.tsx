"use client";

import React, { useEffect, useState } from 'react';
import { Achievement } from '../../types/types';
import { fetchAchievements } from '../../api/garden';

const Achievements: React.FC = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);

    useEffect(() => {
        const loadAchievements = async () => {
            const data = await fetchAchievements();
            setAchievements(data);
        };
        loadAchievements();
    }, []);

    return (
        <div>
            <h2>Osiągnięcia</h2>
            <ul>
                {achievements.map((achievement) => (
                    <li key={achievement.id}>{achievement.title}: {achievement.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Achievements;