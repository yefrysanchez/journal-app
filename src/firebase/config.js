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
  apiKey: "AIzaSyCrTNicUu7t9WHXW9FluuPjVyRSyv9Xx7Q",
  authDomain: "journal-app-de62c.firebaseapp.com",
  projectId: "journal-app-de62c",
  storageBucket: "journal-app-de62c.appspot.com",
  messagingSenderId: "537132402107",
  appId: "1:537132402107:web:9d99980cce259641e6f09e",
  measurementId: "G-0LCSMTKN6N",
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);
export const fireBaseAuth = getAuth(fireBaseApp);
export const fireBaseDB = getFirestore(fireBaseApp);
