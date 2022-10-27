import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import brand from '../../logo.png';
import './navigation.styles.scss';

const Navigation = () => {
  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={brand} alt="house" width={50} />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
