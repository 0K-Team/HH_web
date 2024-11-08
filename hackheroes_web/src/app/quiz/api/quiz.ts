import { Quiz } from '../types/types';

const baseUrl = '/api/v1/';

export const fetchAllQuizzes = async (): Promise<Quiz[]> => {
    const response = await fetch(`${baseUrl}quizzes`);
    if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
    }
    const data: Quiz[] = await response.json();
    return data;
};