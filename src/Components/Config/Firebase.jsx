
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUWCYFWCatCaHrskoqpEYsD3l4vuBtisI",
  authDomain: "olx-4e462.firebaseapp.com",
  projectId: "olx-4e462",
  storageBucket: "olx-4e462.firebasestorage.app",
  messagingSenderId: "40962856155",
  appId: "1:40962856155:web:782961dfa79e8daf82e8fe",
  measurementId: "G-MX8YCKNBDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {auth,provider,analytics,app,db}