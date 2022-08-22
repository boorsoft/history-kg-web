export interface Book {
    id: number;
    title: string;
    author: string;
    city: string;
    year: number;
    fileName: string;
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
    books: {
        data: Book[];
        isLoading: boolean;
        currentBook?: Book;
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