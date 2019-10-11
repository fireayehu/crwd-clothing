import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDX1GsG-aMSIjFd2G19JzOf-wvzofayBgM",
  authDomain: "crwn-clothing-db-2aaed.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-2aaed.firebaseio.com",
  projectId: "crwn-clothing-db-2aaed",
  storageBucket: "",
  messagingSenderId: "784438540836",
  appId: "1:784438540836:web:2b7c41a4c60f23b760f6b1",
  measurementId: "G-HLXCJDTCW1"
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
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
