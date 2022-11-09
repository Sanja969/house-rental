const url1 = 'https://x-house-book.herokuapp.com/users'
const url2 = 'https://x-house-book.herokuapp.com/auth/login'
const POST_USER = 'POST_USER';
const AUTH_USER = 'AUTH_USER';
const LOGOUT = 'LOGOUT';
const initialState = JSON.parse(localStorage.getItem('user')) || {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return action.userData;
    case AUTH_USER:
      return action.userData;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export default userReducer;

export const saveUser = (user) => async(dispatch) => {
  const response = await fetch(url1,
    {
      method: 'POST',
      body: JSON.stringify({
        username: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConf
      }),
      headers: {
       "Content-Type": "application/json"
      },
    });
    const userData = await response.json();
    localStorage.setItem('user', JSON.stringify(userData))
  dispatch({
    type: POST_USER,
    userData
  })
}

export const authUser = (user) => async(dispatch) => {
  const response = await fetch(url2,
    {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
      headers: {
       "Content-Type": "application/json"
      },
    });
    const userData = await response.json();
    localStorage.setItem('user', JSON.stringify(userData))

  dispatch({
    type: AUTH_USER,
    userData
  })
}

export const logout = () => {
  localStorage.setItem('user', JSON.stringify({}))
  return {
    type: LOGOUT
  }
}