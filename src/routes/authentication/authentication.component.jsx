import React from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';
import './authentication.styles.scss';
import { Navigate } from 'react-router-dom';

const Authentication = () => {
  const navbar = useSelector(state => state.navbar)
  const user = useSelector(state => state.user)
  return (
    <>
      {user.username ? <Navigate to="/" /> : 
        <div className={navbar ? "auth-container active" : "auth-container"}>
          <SignUp />
          <SignIn />
        </div>}
    </>

)};

export default Authentication;
