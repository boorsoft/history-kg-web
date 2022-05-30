export interface Paragraph {
    id: number;
    title: string;
    text: string;
    image: string;
}

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    bio: string;
    image: string;
}

export interface Answer {
    id: number;
    text: string;
    isCorrectAnswer: boolean;
}
export interface Question {
    id: number;
    text: string;
    answers: Answer[];
}

export interface Quiz {
    id: number;
    title: string;
    questions: Question[];
}

export interface AppState {
    paragraphs: {
        data: Paragraph[];
        isLoading: boolean;
        currentParagraph?: Paragraph;
    };
    persons: {
        data: Person[];
        isLoading: boolean;
        currentPerson?: Person;
    }
    quizzes: {
        data: Quiz[];
        isLoading: boolean;
        currentQuiz?: Quiz;
    }
}