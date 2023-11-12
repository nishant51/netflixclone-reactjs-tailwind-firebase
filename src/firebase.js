// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER,
  appId:  process.env.REACT_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY="AIzaSyD63NCAQyOV0XiYRFiL00tZn1at9mnaMzM",
// REACT_APP_FIREBASE_AUTH_DOMAIN="netflixclone-react-f9d09.firebaseapp.com",
// REACT_APP_FIREBASE_PROJECT_ID="netflixclone-react-f9d09",
// REACT_APP_FIREBASE_STORAGE_BUCKET="netflixclone-react-f9d09.appspot.com",
// REACT_APP_MESSAGING_SENDER="910835854334",
// REACT_APP_APP_ID="1:910835854334:web:231ceee1f5f51ea2e6aeaf",

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)