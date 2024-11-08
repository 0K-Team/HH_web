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
                    <h3>{quiz.topic}</h3>
                    <p>{quiz.description}</p>
                    <p>Difficulty: {quiz.difficulty_level}</p>
                    <p>Category: {quiz.category}</p>
                    <p>Time Limit: {quiz.time_limit} seconds</p>
                    <p>Points Reward: {quiz.points_reward}</p>
                </div>
            ))}
        </div>
    );
};

export default Topics;