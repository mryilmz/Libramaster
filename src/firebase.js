import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARbcAtLvuQLn3MuTlIakDs5Jm-MYW-YoU",
    authDomain: "libramaster-d22da.firebaseapp.com",
    projectId: "libramaster-d22da",
    storageBucket: "libramaster-d22da.firebasestorage.app",
    messagingSenderId: "370591319637",
    appId: "1:370591319637:web:ea1712f031101dd017b6dc",
    measurementId: "G-TG45HDPYD1"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();