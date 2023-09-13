type quest = {
    index: number;
    question: string;
    group?: number[];
    answers: {
        answer: string;
        score: number;
        index: number;
        pass?: boolean;
    }[];
}[];


