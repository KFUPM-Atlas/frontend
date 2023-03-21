import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useFetchEvent = (slug: string) => {
  const [event, setEvent] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchEvent = async () => {
    const q = query(collection(db, "events"), where("slug", "==", slug));
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setEvent(results[0]);
    });
    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      fetchEvent();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { event, loading, error };
};
