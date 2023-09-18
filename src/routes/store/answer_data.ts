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
    add: ({ index, answer }: { index: number, answer: AnswerType }) => update((answerList) => {
        let addAnswerList = [...answerList];
        addAnswerList[index] = answer;
        sessionStorage.setItem('answer_list', JSON.stringify(addAnswerList));
        return addAnswerList;
    }),
    remove: () => update((answerList) => {
        const removeAnswer = [...answerList].slice(0, [...answerList].length - 1);
        sessionStorage.setItem('answer_list', JSON.stringify(removeAnswer));
        return removeAnswer;
    }),
    removeAll: () => update((answerList) => {
        sessionStorage.removeItem('answer_list');
        return [];
    })
}