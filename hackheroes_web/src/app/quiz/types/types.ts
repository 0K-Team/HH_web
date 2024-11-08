export interface QuizAnswer {
    A: string;
    B: string;
    C: string;
    D: string;
}

export interface QuizQuestion {
    text: string;
    answers: QuizAnswer;
    correct_answer: string;
}

export interface Quiz {
    topic: string;
    description: string;
    questions: QuizQuestion[];
    difficulty_level: string;
    category: string;
    time_limit: number;
    points_reward: number;
}