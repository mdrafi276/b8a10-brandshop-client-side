// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9DPYZMtt-W7lfhFWLXBHRtU6s0pwSGes",
  authDomain: "assignments-ten.firebaseapp.com",
  projectId: "assignments-ten",
  storageBucket: "assignments-ten.appspot.com",
  messagingSenderId: "454885660200",
  appId: "1:454885660200:web:793655974c2ec99244871d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;