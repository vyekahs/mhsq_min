import { db } from "../config/firebase";
import { doc, getDoc } from 'firebase/firestore';
import type { mhsq } from "../type";

export const findOne = async (id: string): Promise<mhsq | null> => {
    const mhsqDoc = doc(db, 'mhsq', id);
    const mhsqSnap = await getDoc(mhsqDoc);

    if (mhsqSnap.exists()) {
        return { id: mhsqSnap.id, ...mhsqSnap.data() } as mhsq;
    } else {
        return null;
    }
}
