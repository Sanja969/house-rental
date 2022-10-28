const url1 = 'http://127.0.0.1:3000/users'
const url2 = 'http://127.0.0.1:3000/auth/login'
const POST_USER = 'POST_USER';
const AUTH_USER = 'AUTH_USER';
const initialState = {};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return action.username;
    case AUTH_USER:
      return action.username;
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
  const username = await response.json();


  dispatch({
    type: AUTH_USER,
    username
  })
}