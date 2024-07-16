// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const auth = getAuth();

const loginHandle = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response.user);
};

export default loginHandle;
