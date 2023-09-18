import { writable } from 'svelte/store';
import type { AnswerType } from '../survey/type';
import { browser } from '$app/environment';

const sessionAnswerList = (): AnswerType[] => {
    if (!browser) {
        return [];
    }

    const initAnswerList = sessionStorage.getItem('answer_list');
    const parsedAnswerList = initAnswerList ? JSON.parse(initAnswerList) : [];
    return parsedAnswerList;
};

const { subscribe, update } = writable(sessionAnswerList() || []);

export const answer = {
    subscribe,
    add: ({ answer }: { answer: AnswerType }) => update((answerList) => {
        const addAnswer = [...answerList, answer];
        sessionStorage.setItem('answer_list', JSON.stringify(addAnswer));
        return addAnswer;
    }),
    remove: () => update((answerList) => {
        const removeAnswer = [...answerList].slice(0, [...answerList].length - 1);
        sessionStorage.setItem('answer_list', JSON.stringify(removeAnswer));
        return removeAnswer;
    })
}