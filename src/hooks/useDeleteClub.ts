import {useState} from "react";
import {toast} from "react-hot-toast";
import {updateDoc} from "firebase/firestore";
import {doc} from "@firebase/firestore";
import {db} from "../core/firebase";

export const useDeleteClub = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);


    const deleteClub = async (clubId) => {
        const reactToast = toast.loading("⌛ جاري حذف النادي ...");
        setLoading(true);
        setError(null);
        try {
            await updateDoc(doc(db, "clubs", clubId), {
                isDeleted: true
            })
            setLoading(false)
            toast.dismiss(reactToast);
            toast.success("🎉 تم حذف النادي بنجاج ");
        } catch (err) {
            setError(err);
            toast.dismiss(reactToast);
            toast.error(err.message);
            setLoading(false);
        }
    };
    return { error, loading, deleteClub };
}