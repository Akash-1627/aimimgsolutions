import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import '../style.css';

const Navbar = () => {
    const navref = useRef();

    const shownavbar = () => {
        navref.current.classList.toggle("responsive-nav");
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <header>
            <img className='logo' src="https://aimingsolution.com/wp-content/uploads/2020/06/aiming-logo-s.png"></img>
            <nav ref={navref}>
                <a className='hover' onClick={() => {shownavbar()}}>Home</a>
                <a className='hover' onClick={() => {shownavbar()}}>About Us</a>
                <a className='active' onClick={() => {shownavbar()}}>Services</a>
                <a className='hover' onClick={() => {shownavbar()}}>Portfolio</a>
                <a className='hover' onClick={() => {shownavbar()}}>Blog</a>
                <a className='hover' onClick={() => {shownavbar()}}>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={shownavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={shownavbar}>
                <FaBars />
            </button>
            
        </header>
    );
}

export default Navbar;
