import React from 'react';

const SeedCard: React.FC = () => {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Nasiono</h2>
            <p>Cena: 10 punktów eko</p>
            <button>Kup</button>
        </div>
    );
};

export default SeedCard;