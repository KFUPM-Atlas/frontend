import { useReducer, useEffect, useState } from "react";
import { db } from "../core/firebase";

import toast from "react-hot-toast";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { generateId } from "../utils/generate_id";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state: any, action: any) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "FETCHED":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    case "UPDATED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

export const useFirestoreFollowers = () => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = collection(db, "followers");

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action: any) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const createFollow = async (uid, clubId) => {
    dispatch({ type: "IS_PENDING" });
    const registrationId = generateId(8);
    try {
      const reactToast = toast.loading(`Following club... ⌛️`);
      await setDoc(doc(db, "followers", registrationId), {
        clubId: clubId,
        id: registrationId,
        uid: uid,
        isDeleted: false,
      });

      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT" });
      toast.dismiss(reactToast);
      toast.success(`Club Followed 🎉`);
    } catch (err) {
      console.log(err);
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const removeFollow = async (id: string) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const reactToast = toast.loading(`Unfollowing club... ⌛️`);
      const docRef = doc(db, "followers", id);
      await updateDoc(docRef, {
        isDeleted: true,
      });
      toast.dismiss(reactToast);
      toast.success(`Club Unfollowed 🎉`);
      dispatchIfNotCancelled({ type: "DELETED" });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return {
    createFollow,
    removeFollow,
    response,
  };
};
