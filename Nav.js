import React, {useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
   const [show , handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                handleShow(true);              
        } 
        else handleShow(false);
         
    }); return () =>{
        window.removeEventListener("scroll",useEffect);
    };
},[]);


  return (


    <div className={`nav ${ show && "nav_black"}`}>
        <img
        className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='netflix logo'></img>

<img
        className='nav_avatar'
        src="https://www.kindpng.com/picc/m/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
        alt='netflix logo'></img>


      

        
      
    </div>
  )
}

export default Nav
