// firebaseUtils.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google Login
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Initialize user data if not exists
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    await setDoc(userRef, {
      credit: 100,
      withdraw: 0,
      history: [],
    });
  }

  return user;
};

export const signOutUser = () => signOut(auth);

export const getUserData = async (uid) => {
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const changeUserCredit = async (uid, changeAmount) => {
  const userRef = doc(db, "users", uid);
  const userData = await getUserData(uid);
  const newCredit = Math.max((userData.credit || 0) + changeAmount, 0);
  await updateDoc(userRef, {
    credit: newCredit,
  });
};

export const addGameHistory = async (uid, gameData) => {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    history: arrayUnion(gameData),
  });
};

export { auth, db };
