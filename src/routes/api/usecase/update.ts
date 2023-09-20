import { db } from "../config/firebase";
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import type { mhsq } from "../type";


export const updateReview = async (answer: mhsq): Promise<void> => {
    if (!answer.id) throw new Error('Answer ID is missing.');
    const answerDoc = doc(db, 'answers', answer.id);
    await setDoc(answerDoc, {
        ...answer,
        updated_at: Timestamp.now(),
        completed: true,
    }, { merge: true });
}
