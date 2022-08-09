import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpLhzcW5dMMt5xnvPo1mX9URRXJRLs8ok",
  authDomain: "simple-chat-app-bf767.firebaseapp.com",
  projectId: "simple-chat-app-bf767",
  storageBucket: "simple-chat-app-bf767.appspot.com",
  messagingSenderId: "187375427275",
  appId: "1:187375427275:web:b5095e5fa8698ed1b7054e",
  measurementId: "G-FB3YLKJDQS"
});

// const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }