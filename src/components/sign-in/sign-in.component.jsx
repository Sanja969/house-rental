import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { authUser } from '../../redux/user';
import './sign-in.styles.scss';

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = (email, password) => dispatch(authUser({
    email,
    password,
  }));

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitUser = () => {
    logIn(email, password);
    resetFormFields();
    gotToHome();
  };

  return (
    <div className="sign-up-box">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form>
        <FormInput type="text" name="email" onChange={handleChange} label="Email" required value={email} />
        <FormInput type="password" name="password" onChange={handleChange} label="Password" required value={password} />
        <Button buttonType="logIn" onClick={submitUser} type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;