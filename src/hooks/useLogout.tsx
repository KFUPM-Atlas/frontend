import { auth } from "../core/firebase";
import { signOut } from "@firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-hot-toast";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    const reactToast = toast.loading("Logging out... ⌛️");

    signOut(auth)
      .then(() => {
        toast.dismiss(reactToast);
        toast.success("Logged out successfully 🎉");
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { logout };
};
