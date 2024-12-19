import React from 'react'
// import NavBar from "./Components/NavBar/NavBar";
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import Title from '../../Components/Title/Title'
import MobileAd from '../../Components/Footer/MobileAd/MobileAd'
import QuickLinks from '../../Components/Footer/QuickLinks/QuickLinks'
import ProductCard from '../ProductCard/ProductCard'
import  Sponser from '../../Components/Footer/Sponser/Sponser'


const Home = () => {
  return (
    <div>
       <NavBar />
          <Title />
          <Banner />
          <ProductCard/>
          <MobileAd />
          <QuickLinks />
          <Sponser />
    </div>
  )
}

export default Home
