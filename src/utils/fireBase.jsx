import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodie-place-2dc2e.firebaseapp.com",
  projectId: "foodie-place-2dc2e",
  storageBucket: "foodie-place-2dc2e.firebasestorage.app",
  messagingSenderId: "113466343549",
  appId: "1:113466343549:web:4f9279cb1803aa8b25f114",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
