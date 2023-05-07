import React from 'react'
import './Content.scss'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home/Home'
import Search from '../../pages/Search/Search'
import Library from '../../pages/Library/Library'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Content = () => {
  return (
    <div className='content'>
      <Navbar/>
      <div className='content-item'>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/library" exact element={<Library />} />
      </Routes>
      
      </div>
      
    </div>
  )
}

export default Content