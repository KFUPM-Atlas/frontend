import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useFetchClubEvent = (clubId: string) => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchEvent = async () => {
    const q = query(
      collection(db, "events"),
      where("clubId", "==", clubId),
      where("isDeleted", "==", false)
    );
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setEvents(results);
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
  return { events, loading, error };
};
