const url = "http://127.0.0.1:3000/reservations"

const GET_RESERVATIONS = "GET_RESERVATIONS"

const initialState = []

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload 
    default:
      return state;
  }
}

export default reservationsReducer;


export const getReservations = () => async(dispatch) => { 
  const response = await fetch(url);
  const reservations = await response.json();
  
  dispatch({
      type: GET_RESERVATIONS,
      payload: reservations
  })
}