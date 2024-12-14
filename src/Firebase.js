import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZg7Y_JEatnZNIH2ZbTswL38SViEFF-oU",
  authDomain: "tech-inventors-backend.firebaseapp.com",
  projectId: "tech-inventors-backend",
  storageBucket: "tech-inventors-backend.firebasestorage.app",
  messagingSenderId: "136519313890",
  appId: "1:136519313890:web:26c8763b43d6ffe6edf1bb",
  measurementId: "G-M6DSQG5X18"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const analytics = getAnalytics(app);
