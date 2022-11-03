import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as FaIcons from "react-icons/fa";
import brand from '../../logo.png';
import './navigation.styles.scss';
import { SidebarData } from './SidebarData';
import { AiFillCaretLeft } from "react-icons/ai";
import { triggerNav } from '../../redux/navbar';
import { logout } from '../../redux/user';
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";

const Navigation = () => {
  const isSidebar = useSelector(state => state.navbar)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const handleNav = () => {
    dispatch(triggerNav());
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <div className='navbar'>
        <Link to="#" className='menu-bars ham' onClick={handleNav} >
          <FaIcons.FaBars/>
        </Link>
        <h2>House rental</h2>
      </div>
      <nav className={isSidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars logo-container'>
                <img className="logo" src={brand} alt="house" width={30} height={30} onClick={handleNav} />
                <h2>House rental</h2>
            </Link> 
          </li>
          <div className='nav-body'>
            <div className='links'>
              {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={handleNav}>
                    {item.icon}
                    {item.title === "Logout" ? <button className="link" onClick={handleLogout}>{item.title}</button> : <span className="link" >{item.title}</span>}
                  </Link>
                </li>
                )
              })}
              <li className="nav-text">
                {!user.username ? 
                  <a to='/auth' onClick={handleNav}>
                    <IoIcons.IoIosLogIn />
                    {<span className="link" >Sign In</span>}
                  </a> :
                  <a to='/auth' onClick={handleNav}>
                    <CgIcons.CgLogOut />
                    {<button className="link" onClick={handleLogout}>Logout</button>}
                  </a> 
                  }
              </li>
            </div>
            <AiFillCaretLeft className='hide-nav' onClick={handleNav}/>
          </div>
        </ul>
        
      </nav>
        <Outlet />
    </>
  );
};

export default Navigation;
