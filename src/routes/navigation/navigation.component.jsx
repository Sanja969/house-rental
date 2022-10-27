import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import brand from '../../logo.png';
import './navigation.styles.scss';

const Navigation = () => {
  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={brand} alt="house" width={30} height={30} />
          <h2>House rental</h2>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOUSES
          </Link>
          <Link className="nav-link" to="/reserve">
            RESERVE
          </Link>
          <Link className="nav-link" to="/my-reservation">
            MY RESERVATIONS
          </Link>
          <Link className="nav-link" to="/add-house">
            ADD HOUSE
          </Link>
          <Link className="nav-link" to="/delete-house">
            DELETE HOUSE
          </Link>
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
