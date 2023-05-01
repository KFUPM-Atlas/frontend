import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, where, onSnapshot } from "@firebase/firestore";

export const useFetchPresident = (clubId: string, uid: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isPresident, setIsPresident] = useState<boolean>();

  const fetchRole = async () => {
    const q = query(
      collection(db, "clubs"),
      where("clubId", "==", clubId),
      where("presidentUid", "==", uid),
      where("isDeleted", "==", false)
    );
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setIsPresident(results[0] ? true : false);
    });
    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      fetchRole();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { isPresident, loading, error };
};
