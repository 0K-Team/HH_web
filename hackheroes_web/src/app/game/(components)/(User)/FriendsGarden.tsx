"use client";

import React, { useEffect, useState } from 'react';
import { fetchFriendGardens } from '../../api/garden';
import { FriendGarden } from '../../types/types';

const FriendsGarden: React.FC = () => {
    const [friendsGardens, setFriendsGardens] = useState<FriendGarden[]>([]);

    useEffect(() => {
        const loadFriendGardens = async () => {
            const data = await fetchFriendGardens();
            setFriendsGardens(data);
        };
        loadFriendGardens();
    }, []);

    return (
        <div>
            <h2>Ogród Znajomych</h2>
            {friendsGardens.map((garden) => (
                <div key={garden.friend_id}>
                    <h3>Ogród {garden.friend_id}</h3>
                    <ul>
                        {garden.plants.map((plant) => (
                            <li key={plant.id}>{plant.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FriendsGarden;