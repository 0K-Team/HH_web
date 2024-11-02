"use client"
// App.tsx
import React, { useState } from "react";
import ProgressComponent from "../daily_chall/progress";

const App: React.FC = () => {
    const [itemsSorted] = useState(5);
    const totalItems = 15;
    const progress = Math.round((itemsSorted / totalItems) * 100);

    return (
        <div className="App">
            <ProgressComponent progress={progress} itemsSorted={itemsSorted} totalItems={totalItems} />
        </div>
    );
};

export default App;


