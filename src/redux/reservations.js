const url = "http://127.0.0.1:3000/reservations"

const GET_RESERVATIONS = "GET_RESERVATIONS"
const SAVE_RESERVATION = "SAVE_RESERVATIONS"

const initialState = []

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload
    case SAVE_RESERVATION:
      return [...state, action.payload]
    default:
      return state
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

export const saveReservation = (reservation) => async(dispatch) => {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
  })
  const data = await response.json()

  dispatch({
    type: SAVE_RESERVATION,
    payload: data
})
}