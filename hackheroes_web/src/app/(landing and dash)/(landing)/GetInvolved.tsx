import React from 'react';

const GetInvolved = () => {
    return (
        <section className="p-8 bg-gray-light">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <ul className="space-y-4">
                {/* Repeat this block for each involvement option */}
                <li className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
                    You can become a volunteer
                    <span>&rarr;</span>
                </li>
            </ul>
        </section>
    );
};

export default GetInvolved;
