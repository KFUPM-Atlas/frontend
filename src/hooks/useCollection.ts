import {
  DocumentData,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useState, useRef, useEffect } from "react";
import { db } from "../core/firebase";

export const useCollection = (collectionName: string, _q) => {
  const [documents, setDocuments] = useState<DocumentData>(null);
  const [loading, setLoading] = useState<boolean>(null);

  const q = useRef(_q).current;
  useEffect(() => {
    setLoading(true);
    let ref: any = collection(db, collectionName);

    if (q && q[0] && q[1] && q[2]) {
      ref = query(ref, where(q[0], q[1], q[2]));
    }
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results.filter((doc) => !doc.isDeleted));

      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { documents, loading };
};
