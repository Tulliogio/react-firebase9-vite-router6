
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk3D6Aqf4MM_ZL4ssbe3dXjo3JbgCQ8v8",
  authDomain: "react-2023-96405.firebaseapp.com",
  projectId: "react-2023-96405",
  storageBucket: "react-2023-96405.appspot.com",
  messagingSenderId: "706271319891",
  appId: "1:706271319891:web:7d59c1a3f33675d60ff3a6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };