import firebase from "firebase/app";
import "firebase/firestore";

// Dotenv lee el archivo .env y guarda su contenido en: process.env.firebaseConfig

// Initialize Firebase
const fb = firebase.initializeApp(process.env.firebaseConfig);

export const db = fb.firestore();
