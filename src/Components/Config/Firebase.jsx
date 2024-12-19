// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC-w2NB_OtHRvCZMHcJFwLiSmL2OXwtco",
  authDomain: "olxproject-e276f.firebaseapp.com",
  projectId: "olxproject-e276f",
  storageBucket: "olxproject-e276f.firebasestorage.app",
  messagingSenderId: "252866654360",
  appId: "1:252866654360:web:9551997ac72c872df1e0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export {auth,provider,analytics,app,db}
