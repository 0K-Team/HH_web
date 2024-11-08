import {Quiz, QuizQuestion} from '../types/types';

const baseUrl = '/api/v1/';

export const fetchQuizBoxes = async (): Promise<Quiz[]> => {
    const response = await fetch(`${baseUrl}quizzes`);
    if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
    }
    const data: Quiz[] = await response.json();
    return data;
};

export const fetchQuizData = async (id: string): Promise<QuizQuestion[]> => {
    const response = await fetch(`${baseUrl}quizzes/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
    }
    const data: Quiz = await response.json();
    return data.questions;
}
