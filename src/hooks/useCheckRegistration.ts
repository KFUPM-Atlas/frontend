import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useCheckRegistration = (slug: string, uid: string) => {
  const [event, setEvent] = useState<any>([]);
  const [hasRegistration, setHasRegistration] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const checkRegistration = async () => {
    const q = query(
      collection(db, "registrations"),
      where("eventSlug", "==", slug),
      where("uid", "==", uid)
    );
    setLoading(true);
    let results = [];
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      if (results[0]) {
        setHasRegistration(true);
      } else {
        setHasRegistration(false);
      }
      setEvent(results);
    });

    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      checkRegistration();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, []);
  return { event, loading, error, hasRegistration };
};
