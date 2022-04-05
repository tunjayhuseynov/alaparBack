import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyA8-YJCX2y9Z1-9XpE_eUSFfURooOrqkfc",
  authDomain: "idealist-c65b6.firebaseapp.com",
  projectId: "idealist-c65b6",
  storageBucket: "idealist-c65b6.appspot.com",
  messagingSenderId: "587827709593",
  appId: "1:587827709593:web:a273cea6688138c2feda08",
  measurementId: "G-X1ZNY4PCV2"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);