import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchPresident } from "../hooks/useFetchPresident";

export const WithPresidentCheck = (Component) => {
  const CheckedComponent = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { id } = useParams();

    const { isPresident, loading } = useFetchPresident(id, user?.uid);

    console.log(isPresident);

    useEffect(() => {
      if (!isPresident && loading == false) {
        navigate("/");
        toast.error("Unauthorized ⛔");
      }
      if (!user) {
        navigate("/");
        toast.error("Unauthorized ⛔");
      }
    }, [isPresident]);

    return <>{isPresident && loading == false && <Component />}</>;
  };

  return CheckedComponent;
};
