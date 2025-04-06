// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABqMVx1IRuh94ToKZAqpaX4AUL_H8XoeM",
  authDomain: "tutorial1-69e1d.firebaseapp.com",
  projectId: "tutorial1-69e1d",
  storageBucket: "tutorial1-69e1d.firebasestorage.app",
  messagingSenderId: "1074960362083",
  appId: "1:1074960362083:web:e361fdbf0dcea8f6242656",
  measurementId: "G-MGPYLK14GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);