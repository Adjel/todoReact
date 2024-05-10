// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqsTZUmaAwsh5mXw9E3qdNAY9l7OdLTuo",
  authDomain: "import.meta.env.AUTH_DOMAIN",
  projectId: "todoreact-6443e",
  //projectId: "import.meta.env.PROJECT_ID",
  storageBucket: "import.meta.env.STORAGE_BUCKET",
  messagingSenderId: "import.meta.env.MESSAGING_SENDER_ID",
  appId: "import.meta.env.APP_ID",
  measurementId: "import.meta.env.MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export {collection, addDoc, serverTimestamp, onSnapshot, signInWithEmailAndPassword}