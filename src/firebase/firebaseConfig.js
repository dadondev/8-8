// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqrAHWKexzYl7OEGLiXsHaQBJXeE-QRtk",
  authDomain: "todo-21-743bb.firebaseapp.com",
  projectId: "todo-21-743bb",
  storageBucket: "todo-21-743bb.appspot.com",
  messagingSenderId: "441695168920",
  appId: "1:441695168920:web:6d8f76ac77ed417a67a3ed",
  measurementId: "G-DJW1KDVMMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
