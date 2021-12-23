import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYtdmNylc_3NrssT5bieXH9WN7QV3Z4jk",
  authDomain: "crown-db-59d9e.firebaseapp.com",
  projectId: "crown-db-59d9e",
  storageBucket: "crown-db-59d9e.appspot.com",
  messagingSenderId: "402045802886",
  appId: "1:402045802886:web:77dbd25db0ce5522787407",
  measurementId: "G-7LMEX6JC0C",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
