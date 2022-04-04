import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/reviews">REVIEWS</CustomLink>
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT</CustomLink>
        </nav>
    );
};

export default Header;