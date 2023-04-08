import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useFetchClub = (id: string) => {
  const [club, setClub] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchClub = async () => {
    const q = query(collection(db, "clubs"), where("clubId", "==", id));
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setClub(results[0]);
    });
    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      fetchClub();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { club, loading, error };
};
