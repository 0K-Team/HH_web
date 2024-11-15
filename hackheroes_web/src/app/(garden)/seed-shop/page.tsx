import React from 'react';
import SeedShop from '../(components)/(SeedShop)/SeedShop';
import { UserProvider } from '@/app/garden/(context)/UserContext';

const SeedShopPage: React.FC = () => {
    return (
        <UserProvider>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Sklep z Nasionami</h1>
                <SeedShop />
            </div>
        </UserProvider>
    );
};

export default SeedShopPage;