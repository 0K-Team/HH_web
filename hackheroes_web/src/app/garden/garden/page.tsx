import React from 'react';
import Garden from '../(components)/(Garden)/Garden';
import { UserProvider } from '@/app/garden/(context)/UserContext';

const GardenPage: React.FC = () => {
    return (
        <UserProvider>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Mój Wirtualny Ogródek</h1>
                <Garden />
            </div>
        </UserProvider>
    );
};

export default GardenPage;