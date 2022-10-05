import React from 'react'
// import { useContext } from 'react'
import HeroSection from './Components/HeroSection'
// import { AppContext } from './Context/ProductContext';
import { useProductContext } from './Context/ProductContext';
const About = () => {

    const { myName } = useProductContext();

    const data = {
        name: "P Mart E-Com",
    }
    return (
        <>
            {myName}
            <HeroSection myData={data} />

        </>
    )
}

export default About