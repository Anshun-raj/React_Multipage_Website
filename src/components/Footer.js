import React from 'react';
import "./FooterStyle.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer' style={{width:'100wh',height:'20vh',backgroundColor:'grey'}}>
        <div className='links'>
            <h3>Links</h3>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </div>
        <div className='office'>
           <h3>Office</h3>
           <h5>Narayan Colony,Banaras bank Chowk,Muzaffarpur,<br/>Bihar,842001</h5>
        </div>
        <div className='details'>
            <h3>Follow</h3>
            <div className='socio'>
               <FaFacebook size={22} style={{color:'#000',marginRight:'0.5rem',marginBottom:'0.5rem'}}/>
               <FaLinkedin size={22} style={{color:'#000',marginRight:'0.5rem',marginBottom:'0.5rem'}}/>
               <FaTwitterSquare size={22} style={{color:'#000',marginRight:'0.5rem',marginBottom:'0.5rem'}}/>
               <FaInstagramSquare size={22} style={{color:'#000',marginRight:'0.5rem',marginBottom:'0.5rem'}}/>
            </div>
        </div>
        <div className='num'>
           <h3>Contact</h3>
           <h5>8736378120</h5>
           <h5>9304216742</h5>
           <h5>6208472091</h5>
        </div>
        <div className='website'>
            <h3>Website</h3>
            <h5>abcR@gmail.com</h5>
            <h5>xyzU@gmail.com</h5>
            <h5>qwpS@gmail.com</h5>
        </div>
    </div>
  )
}

export default Footer;
