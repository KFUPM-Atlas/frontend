import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

export const useFetchUsers = (uids: string[]) => {
  const [users, setProjects] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchProjects = async () => {
    setLoading(true);
    const promises = [];
    for (let current = 0; current < uids.length; current++) {
      const q = query(
        collection(db, "users"),
        where("uid", "==", uids[current])
      );
      promises.push(getDocs(q));
    }
    const projects: any[] = [];

    await Promise.all(promises).then((results) => {
      results.map((result) =>
        projects.push(...result?.docs?.map((doc) => doc.data()))
      );
    });
    setProjects(projects);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchProjects();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  }, [users]);
  return { users, loading, error };
};
