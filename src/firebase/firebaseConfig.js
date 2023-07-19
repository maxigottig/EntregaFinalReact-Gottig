import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnsvDZgxpzufaHLC6zchVsDndudI9ljDI",
    authDomain: "motorola-react.firebaseapp.com",
    projectId: "motorola-react",
    storageBucket: "motorola-react.appspot.com",
    messagingSenderId: "289180897390",
    appId: "1:289180897390:web:a1d7419d243f71f14d967f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

