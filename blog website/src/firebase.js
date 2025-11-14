// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ADD THIS LINE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0h4z8GBGly5wBKiSJaKN0LTLlmlzyIVg",
  authDomain: "projectecho-blog.firebaseapp.com",
  projectId: "projectecho-blog",
  storageBucket: "projectecho-blog.firebasestorage.app",
  messagingSenderId: "1026156693184",
  appId: "1:1026156693184:web:eb4be61efc99744814cf25",
  measurementId: "G-280NBS4MBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

// Export both app and db
export { app, db, analytics };
export default app;