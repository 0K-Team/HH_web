"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { Achievement } from '../types/types';

interface UserContextType {
    ecoPoints: number;
    updateEcoPoints: (newPoints: number) => void;
    addAchievement: (achievement: Achievement) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ecoPoints, setEcoPoints] = useState(0);
    const [achievements, setAchievements] = useState<Achievement[]>([]);

    const updateEcoPoints = (newPoints: number) => {
        setEcoPoints(newPoints);
    };

    const addAchievement = (achievement: Achievement) => {
        setAchievements([...achievements, achievement]);
    };

    return (
        <UserContext.Provider value={{ ecoPoints, updateEcoPoints, addAchievement }}>
            {children}
        </UserContext.Provider>
    );
};