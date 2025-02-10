import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";
     import { getFirestore } from "firebase/firestore";

     const firebaseConfig = {
       apiKey: "AIzaSyARbcAtLvuQLn3MuTlIakDs5Jm-MYW-YoU",
       authDomain: "libramaster-d22da.firebaseapp.com",
       projectId: "libramaster-d22da",
       storageBucket: "libramaster-d22da.firebasestorage.app",
       messagingSenderId: "370591319637",
       appId: "1:370591319637:web:ea1712f031101dd017b6dc"
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export const db = getFirestore(app);