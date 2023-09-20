import type { Timestamp } from "firebase/firestore";
export type mhsq = {
    id?: string;
    created_at?: Timestamp; // YYYY.MM.DD HH:mm
    updated_at?: Timestamp;
    gender?: string;
    answers?: number[];
    completed: boolean;
};