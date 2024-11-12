import React from 'react';
import Garden from './(components)/(Garden)/Garden';
import { UserProvider } from '@/app/garden/(context)/UserContext';
import Sidebar from "@/app/dash/Sidebar";
const GardenPage: React.FC = () => {
    return (
        <UserProvider>
            <Sidebar/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl text-green-green mb-4 text-center">Mój Wirtualny Ogródek</h1>
                <Garden />
            </div>
        </UserProvider>
    );
};

export default GardenPage;