import React from 'react'
import './Navbar.scss'
import Navigation from './Navigation'
import User from './User'
import { useMatch } from 'react-router-dom';
import Search from './Search';


const Navbar = () => {
  const searchRoute = useMatch('/search')
  return (
    <nav className='navbar'>
      <Navigation/>

      {searchRoute && <Search/>}
      <User/>
    </nav>
  )
}

export default Navbar