// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqRC9_eGOGDDzxjtWa3erg_A5r_OruVcU",
  authDomain: "happylist-15e5c.firebaseapp.com",
  projectId: "happylist-15e5c",
  storageBucket: "happylist-15e5c.appspot.com",
  messagingSenderId: "782191325879",
  appId: "1:782191325879:web:693263a6df08662e9cd332",
  measurementId: "G-72W044VJCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
