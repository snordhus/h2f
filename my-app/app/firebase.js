// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0b5DNRcNP3BDYZfs5yD358CVx4NnOnU",
  authDomain: "h2fsite-fda7d.firebaseapp.com",
  projectId: "h2fsite-fda7d",
  storageBucket: "h2fsite-fda7d.appspot.com",
  messagingSenderId: "170553094364",
  appId: "1:170553094364:web:e23bfc772555aa63008419",
  measurementId: "G-HX16XH6WVQ"
};
// ALTERNATIVE FIREBASE (use if quota exceeded)
// const firebaseConfig = {
//   apiKey: "AIzaSyAHwLrfWnHqe1cBfMwwyrdrV6A9Ti4VQaQ",
//   authDomain: "h2fsite2.firebaseapp.com",
//   projectId: "h2fsite2",
//   storageBucket: "h2fsite2.appspot.com",
//   messagingSenderId: "646360996992",
//   appId: "1:646360996992:web:b1d74f19176c141a67da65"
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)
const auth = getAuth(firebaseApp);
 export{firebaseConfig, auth, firebaseApp, db, storage};