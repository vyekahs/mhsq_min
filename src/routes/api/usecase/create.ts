import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import type { mhsq } from "../type";
export const createAnswer = async (answer: mhsq): Promise<string> => {
    const answerCollection = collection(db, 'answer');
    const newAnswer: mhsq = { ...answer }
    newAnswer.created_at = Timestamp.now()
    newAnswer.completed = false
    const result = await addDoc(answerCollection, newAnswer)
    return result.id
}