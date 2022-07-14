import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../../assets/images/download.webp";
import {Link} from "react-router-dom";
import {AiOutlineSearch,AiOutlineShoppingCart,AiOutlineMenu} from "react-icons/ai";

function Navbar() {
    const [open,setopen] = useState(false); 
  return (
    <header className='navbar_main'>
        <nav className='Navbar'>
            <div className='nav_logosection'>
                <img src={logo} alt="logo" />
                <div className='nav_menudiv'>
                    <AiOutlineMenu className='nev_menu' onClick={() => setopen(!open)} />
                </div>
            </div>
            <div className={open ? "nav_listsection active" : "nav_listsection"}>
                <ul className='nav_items'>
                    <li className='nav_item'><a href={"/"}>Home</a></li>
                    <li className='nav_item'><a href={"/"}>Shop</a></li>
                    <li className='nav_item'><a href={"/"}>Profile</a></li>
                    <li className='nav_item'><a href={"/"}>About</a></li>
                    <li className='nav_item'><a href={"/"}>Contact</a></li>
                </ul>
            </div>
            <div className={open ? "nav_iconsection active" : "nav_iconsection"}>
                <div className='nav_icons'>
                     <div className='nav_icondiv'>
                     <AiOutlineSearch className='nav_icon' />
                     </div>
                     <div className='nav_icondiv'>
                    <AiOutlineShoppingCart className='nav_icon' />
                     </div>
                </div>

                <div className='nav_auth'>
                    <div className='nav_button'>Login</div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar