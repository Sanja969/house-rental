import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/user';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.styles.scss';

const SignUp = () => {

  const navigate = useNavigate();

  const user = useSelector(state => state.user);

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    email,
    password,
    passwordConf,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const dispatch = useDispatch();

  const createUser = (name,email, password, passwordConf) => dispatch(saveUser({
    name,
    email,
    password,
    passwordConf,
  }));


  const submitUser = () => {
    createUser(name, email, password, passwordConf);
    resetFormFields();
    gotToHome();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-box">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up</span>
      <form>
        <FormInput type="text" name="name" onChange={handleChange} label="Username" value={name} required />
        <FormInput type="text" name="email" onChange={handleChange} label="Email" value={email} required />
        <FormInput type="password" name="password" onChange={handleChange} label="Password" value={password} required  />
        <FormInput type="password" name="passwordConf" onChange={handleChange} label="Confirm Password" value={passwordConf} required />
        <Button type="submit" onClick={submitUser}>SIGN UP</Button>
      </form>
      {user.errors ? <p className='error-user'>{user.errors[0]}</p> : ''}
    </div>
  );
};

export default SignUp;