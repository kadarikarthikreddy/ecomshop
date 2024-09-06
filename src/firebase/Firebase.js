import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDW2mgrq1gugpO-X5wp3kNceRw9Cwp59QU",
  authDomain: "ecomshop-ea722.firebaseapp.com",
  projectId: "ecomshop-ea722",
  storageBucket: "ecomshop-ea722.appspot.com",
  messagingSenderId: "700321771181",
  appId: "1:700321771181:web:b9042ce5acaae754e12024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
