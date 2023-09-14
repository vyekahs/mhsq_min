import { writable } from 'svelte/store';

const answer = writable<Answer[]>([]);

export { answer }