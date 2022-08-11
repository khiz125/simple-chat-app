import * as firebase from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// const analytics = getAnalytics(app);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

firebase.initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: process.env.VAPIDKEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });


export default firebase;
export const getFirebaseAuth = (): Auth => getAuth();
export const getFirebaseDb = (): Firestore => getFirestore();
