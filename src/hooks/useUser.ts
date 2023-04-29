import { useAuthContext } from "./useAuthContext";
import { useCollection } from "./useCollection";

export const useUser = () => {
  const { user } = useAuthContext();
  if (user?.uid) {
    const { documents } = useCollection("users", ["uid", "==", user?.uid]);
    return documents?.[0];
  } else {
    return null;
  }
};
