import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
    return ( 
        <header>
            <div className='logo'>
                <img src={logo} width="100" height="100" alt="react-logo" />
            </div>
            <div className="title">
                <h2>Dog Breeds DotCom</h2>
            </div>
        </header>
     );
}
 
export default Header;