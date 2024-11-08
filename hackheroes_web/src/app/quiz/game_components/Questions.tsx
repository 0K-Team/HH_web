"use client";
import React, { useEffect, useState } from 'react';
import { fetchQuizData } from '../api/quiz';
import { QuizQuestion } from '../types/types';

const Questions = () => {
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuizQuestions = async () => {
            try {
                const data = await fetchQuizData('quizId'); // Replace 'quizId' with the actual quiz ID
                setQuizQuestions(data);
            } catch {
                setError('Failed to fetch quiz questions');
            } finally {
                setLoading(false);
            }
        };
        loadQuizQuestions();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Questions</h2>
            {quizQuestions.map((question) => (
                <div key={question.id} className="quiz-card">
                    <h3><span className="text-red-500">{question.text}</span></h3>
                    <p>Difficulty: <span className="text-red-500">{question.difficulty_level}</span></p>
                    <p>Time Limit: <span className="text-red-500">{question.time_limit}</span> seconds</p>
                    <p>Points Reward: <span className="text-red-500">{question.points_reward}</span></p>
                    <p>Description: <span className="text-red-500">{question.description}</span></p>
                </div>
            ))}
        </div>
    );
};

export default Questions;