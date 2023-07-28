import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo.png" alt='logo mera' className='logo' />
            </NavLink>
            <Navbar />
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding-left:0.48rem;
    padding-right:4rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
 
  .logo{
    height: 5rem;
    padding-left:4rem;
  }
`;
export default Header