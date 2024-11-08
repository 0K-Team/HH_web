"use client";
import React, { useEffect, useState } from 'react';
import { fetchQuizBoxes } from '../api/quiz';
import { Quiz } from '../types/types';
import Link from 'next/link';

const Topics = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuizzes = async () => {
            try {
                const data = await fetchQuizBoxes();
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
                <Link key={quiz._id} href={`/quiz/questions?quizId=${quiz._id}`}>
                    <div className="quiz-card">
                        <h3><span className="text-red-500">{quiz.topic}</span></h3>
                        <h2>id<span className="text-red-500">{quiz._id}</span></h2>
                        <p>Category:<span className="text-red-500">{quiz.category}</span></p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Topics;