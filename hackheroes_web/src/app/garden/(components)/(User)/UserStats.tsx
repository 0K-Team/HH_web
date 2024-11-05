"use client";

import React, { useEffect, useState } from 'react';
import { fetchUserActions } from '../../api/garden';
import type { UserActions } from '@/app/garden/types/types';

const UserStats: React.FC = () => {
    const [userActions, setUserActions] = useState<UserActions | null>(null);

    useEffect(() => {
        const loadUserActions = async () => {
            const actions: UserActions = await fetchUserActions();
            setUserActions(actions);
        };
        loadUserActions();
    }, []);

    if (!userActions) return <p>Loading...</p>;

    return (
        <div>
            <h2>User Statistics</h2>
            <p>Watering Count: {userActions.wateringCount}</p>
            <p>Fertilizing Count: {userActions.fertilizingCount}</p>
            <p>Harvesting Count: {userActions.weedsRemoved}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default UserStats;