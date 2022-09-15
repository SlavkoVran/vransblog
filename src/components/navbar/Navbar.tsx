import React, { FC } from 'react'
import { HelloTextI } from '../../store/interfaces/dataInterface';
import logo from "../../assets/VB.png"
import './navbar.css'

const Navbar: FC<HelloTextI> = ({
    helloText
}) => {
    helloText('Navbar')
    return (
        <nav className='navbar row'>
            <img  className="logo" src={logo} alt="" />
            <p>Vrans Blog</p>
        </nav>
    );

}

export default Navbar;