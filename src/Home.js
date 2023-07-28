import React from 'react'
// import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import FeaturedProduct from './Components/FeaturedProduct';
// import FeaturedProduct from './Components/FeaturedProduct';
const Home = () => {
    const data = {
        name: "P Mart",
    }
    return <>
        <HeroSection myData={data} />
        <FeaturedProduct />
        <Services />
        <Trusted />
    </>;

};




export default Home
