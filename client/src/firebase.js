// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-590a9.firebaseapp.com",
    projectId: "mern-blog-590a9",
    storageBucket: "mern-blog-590a9.appspot.com",
    messagingSenderId: "549082001416",
    appId: "1:549082001416:web:617ce7d04a92c09ab661bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
