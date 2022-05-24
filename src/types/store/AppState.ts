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
        currentParagraph?: Paragraph;
    };
    persons: {
        data: Person[];
        isLoading: boolean;
        currentPerson?: Person;
    }
    quizzes: Quiz[];
}