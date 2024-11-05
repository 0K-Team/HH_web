"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType {
    ecoPoints: number;
    updateEcoPoints: (newPoints: number) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ecoPoints, setEcoPoints] = useState(0);

    const updateEcoPoints = (newPoints: number) => {
        setEcoPoints(newPoints);
    };

    return (
        <UserContext.Provider value={{ ecoPoints, updateEcoPoints }}>
            {children}
        </UserContext.Provider>
    );
};