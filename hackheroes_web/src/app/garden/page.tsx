import React from 'react';
import Garden from './(components)/(Garden)/Garden';
import { UserProvider } from '@/app/garden/(context)/UserContext';
import Sidebar from "@/app/dash/Sidebar";
const GardenPage: React.FC = () => {
    return (
        <UserProvider>
            <Sidebar/>
            <div className="container mx-auto p-4">
                <Garden />
            </div>
        </UserProvider>
    );
};

export default GardenPage;