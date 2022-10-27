import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in.styles.scss';

const SignIn = () => {

  return (
    <div className="sign-up-box">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form>
        <FormInput type="text" name="username" label="Username" required value='' />
        <FormInput type="password" name="password" label="Password" required value='' />
        <Button buttonType="logIn" type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;