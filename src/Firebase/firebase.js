import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-Kc33rIgHRnaTnlrh1LXfrF1j5vzoF0A",
    authDomain: "book-management-f2ec7.firebaseapp.com",
    projectId: "book-management-f2ec7",
    storageBucket: "book-management-f2ec7.appspot.com",
    messagingSenderId: "1005133064667",
    appId: "1:1005133064667:web:9df625b607ed96db135ffe"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const formRef = collection(db, 'book data');

export default app;