import { useAuthContext } from "./useAuthContext";
import { useCollection } from "./useCollection";

export const useClubName = (id: string) => {
  const { documents } = useCollection("clubs", ["clubId", "==", id]);
  return documents?.[0];
};
