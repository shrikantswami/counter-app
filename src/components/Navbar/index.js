import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import Logo from '../../components/Logo';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo size="24px"  />
        <Bars />
        
        <NavMenu>
          
          <NavLink to='/' activeStyle >
            Home
          </NavLink>
          <NavLink to='/about' activeStyle >
            About
          </NavLink>
          <NavLink to='/career' activeStyle>
            Career
          </NavLink>
          <NavLink to='/Edit-Profile' activeStyle>
            Edit Profile
          </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;