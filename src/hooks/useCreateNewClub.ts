import {useState} from "react";
import {doc} from "@firebase/firestore";
import {db} from "../core/firebase";
import {setDoc} from "firebase/firestore";
import {generateId} from "../utils/generate_id";
import {toast} from "react-hot-toast";


// TODO: to be continued, waiting for faisal's response
export const useCreateNewClub = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);


    const createClub = async (name: string, desc: string, hq: string, presidentId: string,
                              supervisorId: string, clubGender: string) => {
        const reactToast = toast.loading("⌛ جاري إنشاء النادي ...");
        setLoading(true);
        setError(null);
        try {
            const cId = generateId(20)
            await setDoc(doc(db, "clubs", cId), {
                clubId: cId,
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
            toast.success("🎉 تم إنشاء النادي بنجاج ");
        } catch (err) {
            setError(err);
            toast.dismiss(reactToast);
            toast.error(err.message);
            setLoading(false);
        }
    };
    return { error, loading, createClub };
}