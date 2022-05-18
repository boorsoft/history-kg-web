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

export interface Quiz {
    id: number;
    title: string;
}

export interface AppState {
    paragraphs: {
        data: Paragraph[];
        isLoading: boolean;
        currentParagraph: string;
    };
    persons: Person[];
    quizzes: Quiz[];
}