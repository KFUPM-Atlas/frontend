import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useFetchClubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchClubs = async () => {
    const q = query(collection(db, "clubs"), where("isDeleted", "==", false));
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setClubs(results);
    });
    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      fetchClubs();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { clubs, loading, error };
};
