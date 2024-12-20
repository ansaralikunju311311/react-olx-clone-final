import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "./Components/Home/Home";
import Sell from "./Components/Sell/Sell";
import ProductDetails from "./Components/ProductDetails/ProductDetails";



import { auth, provider,db } from "../src/Components/Config/Firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// import {addDoc,doc,collection} from 'firebase/firestore'
import { createContext } from "react";

// Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const signincontext = createContext();

function App() {
 
  const [user, setUser] = useState(false);
  const [propsUser,setProps] =useState('');
  const [email,Setemail] = useState(null)
  const navigate = useNavigate();

  const handlesigin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userid = result.user;
      setProps(userid)
      console.log('User authenticated:', userid);
  
     
      console.log("Data successfully written to Firestore");
  
      setUser(true);
    } catch (error) {
      console.error("Error writing to Firestore:", error);
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
        Setemail(true)
        navigate('/home')
      } else {
        setUser(false);
        Setemail(null);
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <signincontext.Provider value={{ propsUser,user,handlesigin, handlesigout,onAuthStateChanged,auth}}>
      {/* Common for all routes */}
      <Routes>
        <Route path="/sell" element={<Sell  />} />
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/home/product/:id" element={<ProductDetails />}/>
      </Routes>
    </signincontext.Provider>
  );
}

export default App;
