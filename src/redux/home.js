const url = "http://127.0.0.1:3000/houses"
const GET_HOUSES = "GET_HOUSES"
const POST_HOUSE = "POST_HOUSE"

const initialState = []

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSES:
      return action.payload
    case POST_HOUSE:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default homeReducer;

export const getHouses = () => async(dispatch) => {
  const response = await fetch(url);
  const houses = await response.json();

  dispatch({
      type: GET_HOUSES,
      payload: houses
  })
}

export const saveHouse = (house) => async(dispatch) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: house.name,
        description: house.description,
        image_data: house.image_data,
        price: house.price,
        city: house.city,
        adress: house.adress,
        available: house.available,
        user_id: house.user_id
      }),
      headers: {
       "Content-Type": "application/json"
      },
    });

  dispatch({
    type: POST_HOUSE,
    payload: house,
  })
};
