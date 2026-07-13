import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMYaaWAHBFyICkhroq7xqbZfRF4-IXfds",
  authDomain: "forgotten-talents-foundation.firebaseapp.com",
  projectId: "forgotten-talents-foundation",
  storageBucket: "forgotten-talents-foundation.firebasestorage.app",
  messagingSenderId: "1039896535826",
  appId: "1:1039896535826:web:079832d08cebe979a709cb",
  measurementId: "G-7XXNWXEQT8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);