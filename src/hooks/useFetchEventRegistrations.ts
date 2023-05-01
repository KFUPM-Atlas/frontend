import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
import { where } from "firebase/firestore";

export const useFetchEventRegistrations = (eventSlug: string) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchRegistrations = async () => {
    const q = query(
      collection(db, "registrations"),
      where("eventSlug", "==", eventSlug)
    );
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      setRegistrations(results);
    });
    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      fetchRegistrations();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { registrations, loading, error };
};
