import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import brand from '../../logo.png';
import './navigation.styles.scss';
import { SidebarData } from './SidebarData';
import { AiFillCaretLeft } from "react-icons/ai";

const Navigation = () => {
  const [sidebar, setSidebar]  = useState(false)
  const triggleSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className='navbar'>
        <Link to="#" className='menu-bars ham' >
          <FaIcons.FaBars onClick={triggleSidebar} />
        </Link>
        <h2>House rental</h2>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars logo-container'>
                <img className="logo" src={brand} alt="house" width={30} height={30} />
                <h2>House rental</h2>
            </Link> 
          </li>
          <div className='nav-body'>
            <div className='links'>
              {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={triggleSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                )
              })}
            </div>
            <AiFillCaretLeft className='hide-nav' onClick={triggleSidebar}/>
          </div>
        </ul>
        
      </nav>
        <Outlet />
    </>
  );
};

export default Navigation;
