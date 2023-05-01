import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
import { where } from "firebase/firestore";

export const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchEvents = async () => {
    const q = query(collection(db, "events"), where("isDeleted", "==", false));
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
      fetchEvents();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { events, loading, error };
};
