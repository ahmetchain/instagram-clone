// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import toast from "react-hot-toast";

import { userHandle } from "utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2txQwKGQaRJ6ybYSNxOZELXIQW8XXqdk",
  authDomain: "faketigram.firebaseapp.com",
  projectId: "faketigram",
  storageBucket: "faketigram.appspot.com",
  messagingSenderId: "256617149474",
  appId: "1:256617149474:web:006e37ef92995af41d467b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    let dbUser = await getDoc(doc(db, "users", user.uid));
    let data = {
      email: user.email,
      uid: user.uid,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

const loginHandle = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};
export default loginHandle;

export const registerHandle = async ({
  email,
  password,
  full_name,
  username,
}) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", response.user.uid), {
    email,
    full_name,
    username,
    notification: [],
    followers: [],
    following: [],
    posts: [],
  });
  return response;
};

export const logoutHandle = async () => {
  try {
    await signOut(auth);
    toast.success("Çıkış işlemi başarılı");
  } catch (err) {
    toast.error(err.code);
  }
};
