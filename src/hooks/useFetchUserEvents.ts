import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

export const useFetchUserEvents = (eventSlugs: string[]) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  console.log(eventSlugs);

  const fetchEvents = async () => {
    setLoading(true);
    const promises = [];
    for (let current = 0; current < eventSlugs.length; current++) {
      const q = query(
        collection(db, "events"),
        where("slug", "==", eventSlugs[current])
      );
      promises.push(getDocs(q));
    }
    const events: any[] = [];

    await Promise.all(promises).then((results) => {
      results.map((result) =>
        events.push(...result?.docs?.map((doc) => doc.data()))
      );
    });
    setEvents(events);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchEvents();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, [eventSlugs]);
  return { events, loading, error };
};
