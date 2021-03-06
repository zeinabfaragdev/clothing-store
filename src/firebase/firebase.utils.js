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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshot = (collections) => {
  const transformedCollection = {};
  const collectionsArray = collections.docs.map((doc) => {
    const { title, items, routeName } = doc.data();
    return {
      routeName,
      title,
      items,
      id: doc.id,
    };
  });

  collectionsArray.forEach((collection) => {
    transformedCollection[collection.routeName] = collection;
  });

  return transformedCollection;
};

export default firebase;
