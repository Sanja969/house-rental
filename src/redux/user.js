const url = 'http://127.0.0.1:4000/users'
const POSTUSER = 'POSTUSER';
const initialState = {};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTUSER:
      return action.user;
    default:
      return state;
  }
}

export default userReducer;

export const saveUser = (user) => async(dispatch) => {
  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        username: user.name,
        password: user.password,
        password_confirmation: user.passwordConf
      }),
      headers: {
        Accept: "application/json",
                "Content-Type": "application/json"
      },
    });

  dispatch({
    type: POSTUSER,
    user,
  })
}