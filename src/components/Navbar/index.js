import React, { useContext } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import AuthContext from '../../Pages/Accounts/Auth/AuthContext';
import Logo from '../../components/Logo';
  
const Navbar = () => {
  const {logedIn} = useContext(AuthContext)
  return (
    <>
      <Nav position='fixed'>
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
          { logedIn &&
          <NavLink to='/Dashboard' activeStyle>
            Dashboard
          </NavLink>}
        </NavMenu>
        { !logedIn &&
          <NavBtn>
              <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
              <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          </NavBtn>}
      </Nav>
    </>
  );
};
  
export default Navbar;