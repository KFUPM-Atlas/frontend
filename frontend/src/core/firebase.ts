import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8vfNchj1W50U7LWNnHvRkXr0deBsjI0k",
  authDomain: "atlas-9b6d3.firebaseapp.com",
  projectId: "atlas-9b6d3",
  storageBucket: "atlas-9b6d3.appspot.com",
  messagingSenderId: "655516425716",
  appId: "1:655516425716:web:c155be0bc33ae64bdaeda1",
};
const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore(app);
const timestamp = firebase.firestore.Timestamp;

const auth = firebase.auth(app);
export { app, auth, db, timestamp };
