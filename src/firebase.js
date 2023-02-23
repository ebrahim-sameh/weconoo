import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhPilAcLK1F_Nzzit3etHO1aBBlDL8Glc",
  authDomain: "wecan-adminstration.firebaseapp.com",
  databaseURL: "https://wecan-adminstration-default-rtdb.firebaseio.com",
  projectId: "wecan-adminstration",
  storageBucket: "wecan-adminstration.appspot.com",
  messagingSenderId: "754148921781",
  appId: "1:754148921781:web:2fa94c36971a35df8209fc",
  measurementId: "G-WTYVCL2DLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
