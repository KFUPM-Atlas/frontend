import { useState } from "react";
import { auth, db } from "../core/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { serverTimestamp, doc } from "@firebase/firestore";
import { setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (name: string, email: string, password: string) => {
    const reactToast = toast.loading("Signing up... ⌛️");
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        uid: res.user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp(),
        isDeleted: false,
      };

      await setDoc(doc(db, "users", res.user.uid), user);
      dispatch({ type: "LOGIN", payload: res.user });
      toast.dismiss(reactToast);
      toast.success("Signed up successfully 🎉");
    } catch (err) {
      console.log(err);
      setError(err);
      toast.dismiss(reactToast);
      toast.error("Email already taken, try again.");
      setLoading(false);
    }
  };
  return { loading, error, signup };
};
