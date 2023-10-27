// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo0b5DNRcNP3BDYZfs5yD358CVx4NnOnU",
  authDomain: "h2fsite-fda7d.firebaseapp.com",
  projectId: "h2fsite-fda7d",
  storageBucket: "h2fsite-fda7d.appspot.com",
  messagingSenderId: "170553094364",
  appId: "1:170553094364:web:e23bfc772555aa63008419",
  measurementId: "G-HX16XH6WVQ"
};

// Initialize Firebase
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)
const auth = getAuth(firebaseApp);
 export{firebaseConfig, auth, firebaseApp, db, storage};