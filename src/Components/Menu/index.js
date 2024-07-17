import React from 'react';
import './Menu.css'

const Menu = (props) => {
    return(
        <nav className='navbar'>
            <ul className='navbar-item'>
                <li><a href={props.url}>Home</a></li>
                <li><a href={props.url+"/about"}>About</a></li>
                <li><a href={props.url+"/contact"}>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Menu;