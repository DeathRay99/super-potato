import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBDcsRSFTjE4S13Z_Crmu_R5D4LcvSF3pA",
  authDomain: "whatsapp-clone-4ec0f.firebaseapp.com",
  projectId: "whatsapp-clone-4ec0f",
  storageBucket: "whatsapp-clone-4ec0f.appspot.com",
  messagingSenderId: "243006787211",
  appId: "1:243006787211:web:8575bad110c1b397d34e8e"
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage=getStorage(app);