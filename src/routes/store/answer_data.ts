import { writable } from 'svelte/store';

const answer = writable<number[]>([]);

export { answer }