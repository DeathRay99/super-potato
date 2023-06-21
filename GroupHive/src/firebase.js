import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCCLu3_ADLgFcJSdczFUOpmqYdjlKifHJ0",
  authDomain: "grouphive-8d8f9.firebaseapp.com",
  projectId: "grouphive-8d8f9",
  storageBucket: "grouphive-8d8f9.appspot.com",
  messagingSenderId: "437157777528",
  appId: "1:437157777528:web:7ee6207c6d3cad7be01d8d"
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage=getStorage(app);