



import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Title/Title";
import Sell from "./Components/Sell/Sell";
import MobileAd from "./Components/Footer/MobileAd/MobileAd";
import QuickLinks from "./Components/Footer/QuickLinks/QuickLinks";
import Sponser from "./Components/Footer/Sponser/Sponser";


import { auth, provider,db } from "../src/Components/Config/Firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {setDoc,doc} from 'firebase/firestore'
import { createContext } from "react";

// Create Context
export const signincontext = createContext();

function App() {
  const [user, setUser] = useState(false);
  const [email,Setemail] = useState(null)
  const navigate = useNavigate();

  const handlesigin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
       await setDoc(doc(db,"user",user.uid),{
        email:user.email,
        uid:user.uid,
        createdAt:new Date().toISOString(),
       })


      setUser(true);
      navigate("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  const handlesigout = async () => {
    try {
      await signOut(auth);
      setUser(false);
      navigate("/"); // Redirect to the homepage after logout
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        Setemail(user.email)
      } else {
        setUser(false);
        Setemail(null)
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <signincontext.Provider value={{ user, handlesigin, handlesigout,onAuthStateChanged,auth}}>
      {/* Common for all routes */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
            <NavBar /> 
              <Title />
              <Banner />
              <MobileAd />
             
            </>
          }
        />
   

        {/* Sell Page Route */}
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <QuickLinks />
      <Sponser />
    </signincontext.Provider>
  );
}

export default App;
