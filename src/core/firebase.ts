import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { initializeAppIfNecessary } from "../utils/initialize_app_if_necessary";

//init firebase
initializeAppIfNecessary();
//init firestore
const db = getFirestore();
//init auth
const auth = getAuth();

export { db, auth };
