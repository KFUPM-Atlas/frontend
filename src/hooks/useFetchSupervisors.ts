import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../core/firebase";
import {collection, query, onSnapshot, where} from "@firebase/firestore";

export const useFetchSupervisors = () => {
    const [supervisors, setSupervisors] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchSupervisors = async () => {
        const q = query(collection(db, "users"), where("isDeleted", "==", false),
            where("role", "==", "supervisor"));
        setLoading(true);
        const unsub = onSnapshot(q, (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({ ...doc?.data(), id: doc?.id });
            });
            setSupervisors(results);
        });
        setLoading(false);
        return () => unsub();
    };

    useEffect(() => {
        try {
            fetchSupervisors();
        } catch (err) {
            toast.error(err.message);
            setError(err.message);
        }
    }, []);
    return { supervisors, loading, error };
};