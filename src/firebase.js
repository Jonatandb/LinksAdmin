import firebase from "firebase/app";

// Dotenv lee el archivo .env y guarda su contenido en: process.env.firebaseConfig

// Initialize Firebase
firebase.initializeApp(process.env.firebaseConfig);
