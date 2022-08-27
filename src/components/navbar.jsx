import React,{useState} from 'react';
import{Link} from 'react-scroll';
import logo from '../images/logo1.png';
function Navbar() {
const[nav,setnav] = usestate(false);

const changeBackground =() => {
    if(window.scrollY >= 50) {
        setnav(true);
    }
    else{
        setnav(false);
    }
}

window.addEventListener('scroll',changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
    <Link to='main' className='logo' >
         <img src={logo} alt=''/>
         </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
        <label      
    </nav >
  )
}

export default navbar
