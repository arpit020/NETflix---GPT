// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZxFIFNVsDfGpXPTScSY7IHniLOpuTvm0",
  authDomain: "netflix-gpt-29.firebaseapp.com",
  projectId: "netflix-gpt-29",
  storageBucket: "netflix-gpt-29.appspot.com",
  messagingSenderId: "821059017346",
  appId: "1:821059017346:web:95a304a5208c6e4509b29b",
  measurementId: "G-YXYBHBWER5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);