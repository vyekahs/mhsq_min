type quest = {
    index: number;
    question: string;
    group?: number[];
    answers: Answer[];
}[];

type Answer = {
    answer: string;
    score: number;
    index: number;
    pass?: boolean;
}