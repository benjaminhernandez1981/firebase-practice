// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg35T76AWJ8-0cmzQq-0WuhcN1ahZOVS4",
  authDomain: "fir-practice-25a41.firebaseapp.com",
  projectId: "fir-practice-25a41",
  storageBucket: "fir-practice-25a41.appspot.com",
  messagingSenderId: "546580058793",
  appId: "1:546580058793:web:1c6aeb31578dd1dc78cfb8",
  measurementId: "G-M77FEE8K46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
