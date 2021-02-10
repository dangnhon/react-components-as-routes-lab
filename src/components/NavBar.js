import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
      to='/'
      exact
      style={link} 
      activeStyle={{background: 'lightPink'}}
      >Home</NavLink>

      <NavLink 
      to='/movies'
      exact
      style={link}
      activeStyle={{background: 'lightPink'}}
      >Movies</NavLink>

      <NavLink 
      to={'/directors'}
      exact
      style={link}
      activeStyle={{background: 'lightPink'}}
      >Directors</NavLink>

      <NavLink 
      to={'/actors'}
      exact
      style={link}
      activeStyle={{background: 'lightPink'}}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
