import React from 'react'
// import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
const Home = () => {
    const data = {
        name: "P Mart",
    }
    return <>
        <HeroSection myData={data} />
        <Services />
        <Trusted />
    </>;

};



// const Wrapper = styled.section`
//     height:100vh;
//     background-color:${({ theme }) => theme.colors.bg};

// `;
export default Home
