import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl1GWRyxV8bbAVm6jq8A1HApvUcgFlNn8",
  authDomain: "linksadmin-a1d4b.firebaseapp.com",
  databaseURL: "https://linksadmin-a1d4b.firebaseio.com",
  projectId: "linksadmin-a1d4b",
  storageBucket: "linksadmin-a1d4b.appspot.com",
  messagingSenderId: "1043527660497",
  appId: "1:1043527660497:web:5f297ddc781b44bfe0e6f0",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
