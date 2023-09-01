import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'


const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <div>
                <p>
                <Link to={'/home'}>Back to Home</Link>
                </p>
            </div>
            <div>
                <h1>PERIPATETIC<img id="logo" src={logo} alt='logo'/>PARTNER</h1>
            </div>
            <div>
                <p>
                <Link to={'/login'}>Login</Link>
                </p>
            </div>
        </div>
    )}

export default Navbar;