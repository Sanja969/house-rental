import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import brand from '../../logo.png';
import './navigation.styles.scss';
import { SidebarData } from './SidebarData';

const Navigation = () => {
  const [sidebar, setSidebar]  = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className='navbar'>
        <Link to="#" className='menu-bars ham' >
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars logo-container'>
                <AiIcons.AiOutlineClose /> 
                <img className="logo" src={brand} alt="house" width={30} height={30} />
                <h2>House rental</h2>
            </Link> 
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
              )
          })}
        </ul>
      </nav>
        <Outlet />
    </>
  );
};

export default Navigation;
