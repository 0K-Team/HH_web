export interface QuizAnswer {
    A: string;
    B: string;
    C: string;
    D: string;
}

export interface QuizQuestion {
    id: string;
    text: string;
    answers: QuizAnswer;
    correct_answer: string;
    time_limit: number;
    points_reward: number;
    difficulty_level: string;
    description: string;
}

export interface Quiz {
    _id: string;
    topic: string;
    questions: QuizQuestion[];
    category: string;

}