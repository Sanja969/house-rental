import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import brand from '../../logo.png';
import './navigation.styles.scss';
import { AiFillCaretLeft } from "react-icons/ai";
import { triggerNav } from '../../redux/navbar';
import { getHouse } from "../../redux/detail";
import { logout } from '../../redux/user';

import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";


const Navigation = () => {
  const isSidebar = useSelector(state => state.navbar)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleReserve = (house) => {
    dispatch(getHouse(house));
    dispatch(triggerNav());
  }

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
              <li className='nav-text'>
                <Link to='/' onClick={handleNav}>
                <AiIcons.AiFillHome />
                  <span className="link" >Home</span>
                </Link>
              </li>
              <li className='nav-text'>
                <Link to='/my-reservations' onClick={handleNav}>
                  <BsIcons.BsJournalCheck />
                  <span className="link" >My Reservations</span>
                </Link>
              </li>

              { user.role === 'admin' ?
               (<>
                <li className='nav-text'>
                  <Link to='/add-house' onClick={handleNav}>
                    <GiIcons.GiHouseKeys />
                    <span className="link" >Add House</span>
                  </Link>
                </li>             
                <li className='nav-text'>
                  <Link to='/delete-house' onClick={handleNav}>
                    <MdIcons.MdFreeCancellation />
                    <span className="link" >Delete House</span>
                  </Link>
                </li>
              </> ) : ''}
              <li className='nav-text'>
                <Link to='/reserve' onClick={() => handleReserve(false)}>
                  <FaIcons.FaCalendarCheck />
                  <span className="link" >Reserve</span>
                </Link>
              </li>
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
        <footer>Copyright @sanja969/house-rental </footer>
      </nav>
      
        <Outlet />
    </>
  );
};

export default Navigation;
