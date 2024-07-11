// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhPDW1I2W8XdP8FipZJK_8hkdYnZPZYWQ",
  authDomain: "cofestore-ffdf4.firebaseapp.com",
  projectId: "cofestore-ffdf4",
  storageBucket: "cofestore-ffdf4.appspot.com",
  messagingSenderId: "986866293087",
  appId: "1:986866293087:web:a329b21936fd8cb6547eea",
  measurementId: "G-4YG0DGQ7VB",
  databaseURL: "https://cofestore-ffdf4-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const realDB = getDatabase(app)
