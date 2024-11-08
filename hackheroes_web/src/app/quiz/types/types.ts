
export interface QuizQuestion {
    id: string;
    text: string;
    answers: {
        A: string;
        B: string;
        C: string;
        D: string;
    }
}

export interface Quiz {
    _id: string;
    topic: string;
    questions: QuizQuestion[];
    category: string;

}