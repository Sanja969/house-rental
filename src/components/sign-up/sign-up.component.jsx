import React from 'react';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../redux/user';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.styles.scss';

const SignUp = () => {
  let name = '';
  let password = '';
  let passwordConf = '';

  const dispatch = useDispatch();

  const createUser = (name, password, passwordConf) => dispatch(saveUser({
    name,
    password,
    passwordConf,
  }));

  const addName = (e) => {
    name = e.target.value;
  };

  const addPassword = (e) => {
    password = e.target.value;
  };

  const addPasswordConf = (e) => {
    passwordConf = e.target.value;
  };

  const submitUser = () => {
    createUser(name, password, passwordConf);
  };

  return (
    <div className="sign-up-box">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up</span>
      <form>
        <FormInput type="text" name="username" onChange={addName} label="Username" value={name} required />
        <FormInput type="password" name="password" onChange={addPassword} label="Password" value={name} required  />
        <FormInput type="password" name="password_confirmation" onChange={addPasswordConf} label="Confirm Password" value={name} required />
        <Button type="submit" onClick={submitUser}>SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;