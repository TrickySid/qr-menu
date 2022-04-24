import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK_Ln7tnOK0kDf69RS-kPRhxsBkHffvnE",
    authDomain: "e-menu-9772f.firebaseapp.com",
    projectId: "e-menu-9772f",
    storageBucket: "e-menu-9772f.appspot.com",
    messagingSenderId: "728909718490",
    appId: "1:728909718490:web:00ee4fa93a0dfb2accd6e3"
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
