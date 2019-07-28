import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config =  {
    apiKey: "AIzaSyCJktN1-DRhiWNpCody74rpafmaQtAnuJ8",
    authDomain: "crawn-db-d083d.firebaseapp.com",
    databaseURL: "https://crawn-db-d083d.firebaseio.com",
    projectId: "crawn-db-d083d",
    storageBucket: "",
    messagingSenderId: "162276615311",
    appId: "1:162276615311:web:e3bbe388dabdc4a7"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
