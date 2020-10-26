/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

const App = () => {
  return (
   <div className='app-wrapper'>
  <Header/>
  <Navbar/>
  <Profile/>
   </div>
  );
}

export default App;
