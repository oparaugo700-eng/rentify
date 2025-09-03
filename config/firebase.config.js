// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "rentify-8714f.firebaseapp.com",
    projectId: "rentify-8714f",
    storageBucket: "rentify-8714f.firebasestorage.app",
    messagingSenderId: "903019051041",
    appId: "1:903019051041:web:8c2120dc8c6641249dcb60"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage }