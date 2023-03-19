import { useState } from "react";
import { auth } from "../core/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    const reactToast = toast.loading("Logging in... ⌛️");
    setLoading(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      toast.dismiss(reactToast);
      toast.success("Logged in successfully 🎉");
      setLoading(false);
    } catch (err) {
      setError(err);
      toast.dismiss(reactToast);
      toast.error("Incorrect credentials, try again.");
      setLoading(false);
    }
  };
  return { error, loading, login };
};
