

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" 
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCiz-P50EaEBgD2nYWaXKV5uMzn1Z96UuM",
  authDomain: "esnaflar-44dd4.firebaseapp.com",
  projectId: "esnaflar-44dd4",
  storageBucket: "esnaflar-44dd4.appspot.com",
  messagingSenderId: "74044300987",
  appId: "1:74044300987:web:06d1700ce83f052203539e",
  measurementId: "G-FE50SVNRL1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);


 

 