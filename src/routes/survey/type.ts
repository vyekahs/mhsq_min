import type { ComponentType } from 'svelte';

export type QuestionType = {
    index: number;
    question: string;
    group?: number[];
    answers: AnswerType[];
}[];

export type AnswerType = {
    answer: string;
    score: number;
    index: number;
    pass?: boolean;
}

export type StepType = {
    name: number; // index
    component: ComponentType;
    props?: Record<string, any>
}