const GET_HOUSE = "GET_HOUSE"

const initialState = JSON.parse(localStorage.getItem('house'));

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSE:
      return action.house;
    default:
      return state;
  }
}

export default detailReducer;

export const getHouse = (house) => {
  localStorage.setItem('house',  JSON.stringify(house));
  return {
    type: GET_HOUSE,
    house: house,
  }
}