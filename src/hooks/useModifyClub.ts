import {useState} from "react";
import {doc} from "@firebase/firestore";
import {db} from "../core/firebase";
import {updateDoc} from "firebase/firestore";
import {toast} from "react-hot-toast";


// TODO: to be continued, waiting for faisal's response
export const useModifyClub = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);


    const modifyClub = async (clubId: string, name: string, desc: string, hq: string, presidentId: string,
                              supervisorId: string, clubGender: string) => {
        const reactToast = toast.loading("⌛ جاري تعديل النادي ...");
        setLoading(true);
        setError(null);
        try {
            await updateDoc(doc(db, "clubs", clubId), {
                description: desc,
                followers: 0,
                name: name,
                headQuarter: hq,
                presidentId: presidentId,
                supervisorId: supervisorId,
                clubGender: clubGender,
                isDeleted: false
            })
            setLoading(false)
            toast.dismiss(reactToast);
            toast.success("🎉 تم تعديل النادي بنجاج ");
        } catch (err) {
            setError(err);
            toast.dismiss(reactToast);
            toast.error(err.message);
            setLoading(false);
        }
    };
    return { error, loading, modifyClub };
}