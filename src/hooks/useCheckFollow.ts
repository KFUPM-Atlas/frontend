import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, onSnapshot, where } from "@firebase/firestore";

export const useCheckFollow = (clubId: string, uid: string) => {
  const [follow, setFollow] = useState<any>([]);
  const [hasFollow, setHasFollow] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const checkFollow = async () => {
    const q = query(
      collection(db, "followers"),
      where("clubId", "==", clubId),
      where("uid", "==", uid),
      where("isDeleted", "==", false)
    );
    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc?.data(), id: doc?.id });
      });
      console.log(results);
      if (results[0]) {
        setHasFollow(true);
      } else {
        setHasFollow(false);
      }
      setFollow(results[0]);
    });

    setLoading(false);
    return () => unsub();
  };

  useEffect(() => {
    try {
      checkFollow();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, [clubId, uid]);
  return { follow, loading, error, hasFollow };
};
