"use client";

import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../../api/garden';
import { LeaderboardEntry } from '../../types/types';

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        const loadLeaderboard = async () => {
            const data = await fetchLeaderboard();
            setLeaderboard(data);
        };
        loadLeaderboard();
    }, []);

    return (
        <div>
            <h2>Ranking</h2>
            <table>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Punkty</th>
                </tr>
                </thead>
                <tbody>
                {leaderboard.map((entry) => (
                    <tr key={entry.user_id}>
                        <td>{entry.username}</td>
                        <td>{entry.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;