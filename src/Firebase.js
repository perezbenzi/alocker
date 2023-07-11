// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqna6sjqdHq3c3QM3xWbVB7IIzvJHyIXs",
  authDomain: "alocker-bd7b8.firebaseapp.com",
  projectId: "alocker-bd7b8",
  storageBucket: "alocker-bd7b8.appspot.com",
  messagingSenderId: "156208158049",
  appId: "1:156208158049:web:4663075964f1379e73a120",
  measurementId: "G-BHQ9B5QDCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);