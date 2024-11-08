"use client";
import React, { useEffect, useState } from 'react';
import { fetchAllQuizzes } from '../api/quiz';
import { Quiz } from '../types/types';

const Topics = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuizzes = async () => {
            try {
                const data = await fetchAllQuizzes();
                setQuizzes(data);
            } catch {
                setError('Failed to fetch quizzes');
            } finally {
                setLoading(false);
            }
        };
        loadQuizzes();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Topics</h2>
            {quizzes.map((quiz) => (
                <div key={quiz.topic} className="quiz-card">
                    <h3><span className="text-red-500">{quiz.topic}</span> </h3>
                    <p><span className="text-red-500">{quiz.description}</span> </p>
                    <p>Difficulty: <span className="text-red-500">{quiz.difficulty_level}</span></p>
                    <p>Category:<span className="text-red-500">{quiz.category}</span> </p>
                    <p>Time Limit: <span className="text-red-500">{quiz.time_limit}</span>  seconds</p>
                    <p>Points Reward: <span className="text-red-500">{quiz.points_reward}</span> </p>
                </div>
            ))}
        </div>
    );
};

export default Topics;