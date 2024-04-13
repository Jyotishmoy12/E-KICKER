// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-t3hCbzoLuGP2JqUc75qCiyTNDRBXp8M",
  authDomain: "e-kicker.firebaseapp.com",
  projectId: "e-kicker",
  storageBucket: "e-kicker.appspot.com",
  messagingSenderId: "286842017972",
  appId: "1:286842017972:web:cfd41a0363cae2f6d69fe1",
  measurementId: "G-TJ8RS5CYLQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()