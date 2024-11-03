import React from 'react';
import '../globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="pl">
        <body className="bg-gray-light">
        <header className="bg-gray-dark p-4 text-white text-center">
            <h1 className="text-xl">Wirtualny Ogródek</h1>
        </header>
        <main>{children}</main>
        <footer className="fixed bottom-0 left-[50%] transform -translate-x-1/2 w-full bg-gray-dark text-white text-center p-2">
            &copy; 2024 Wirtualny Ogródek
        </footer>
        </body>
        </html>
    );
};

export default Layout