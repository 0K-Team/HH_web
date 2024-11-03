import React from 'react';
import '../globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="pl">
        <body>
        <header className="bg-green-500 p-4 text-white text-center">
            <h1 className="text-xl">Wirtualny Ogródek</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-2">
            &copy; 2024 Wirtualny Ogródek
        </footer>
        </body>
        </html>
    );
};

export default Layout;