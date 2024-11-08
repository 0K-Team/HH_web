"use client";
import React, { useEffect, useState } from 'react';
import { fetchQuizData } from '../api/quiz';
import { QuizQuestion } from '../types/types';

interface QuestionsProps {
    quizId: string;
    category: string;
}

const Questions: React.FC<QuestionsProps> = ({ quizId, category }) => {
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuizQuestions = async () => {
            try {
                const data = await fetchQuizData(quizId);
                const filteredQuestions = data.filter((question: QuizQuestion) => question.category === category);
                setQuizQuestions(filteredQuestions);
            } catch {
                setError('Failed to fetch quiz questions');
            } finally {
                setLoading(false);
            }
        };
        loadQuizQuestions();
    }, [quizId, category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Questions</h2>
            {quizQuestions.map((question) => (
                <div key={question.id} className="quiz-card">
                    <h3><span className="text-red-500">{question.text}</span></h3>
                    <p>A <span className="text-red-500">{question.answers.A}</span></p>
                    <p>B <span className="text-red-500">{question.answers.B}</span></p>
                    <p>C <span className="text-red-500">{question.answers.C}</span></p>
                    <p>D <span className="text-red-500">{question.answers.D}</span></p>
                </div>
            ))}
        </div>
    );
};

export default Questions;