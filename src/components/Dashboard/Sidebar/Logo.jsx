import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
              <img
                className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
        </div>
    );
};

export default Logo;