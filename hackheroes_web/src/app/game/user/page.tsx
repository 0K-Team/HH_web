import React from 'react';
import UserStats from '../(components)/(User)/UserStats';
import { UserProvider } from '@/app/game/(context)/UserContext';

const UserPage: React.FC = () => {
    return (
        <UserProvider>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Statystyki Użytkownika</h1>
                <UserStats />
            </div>
        </UserProvider>
    );
};

export default UserPage;