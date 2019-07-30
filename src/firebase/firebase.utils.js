import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJktN1-DRhiWNpCody74rpafmaQtAnuJ8",
  authDomain: "crawn-db-d083d.firebaseapp.com",
  databaseURL: "https://crawn-db-d083d.firebaseio.com",
  projectId: "crawn-db-d083d",
  storageBucket: "",
  messagingSenderId: "162276615311",
  appId: "1:162276615311:web:e3bbe388dabdc4a7"
};
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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
