const url = "https://x-house-book.herokuapp.com/houses"
const GET_HOUSES = "GET_HOUSES"
const POST_HOUSE = "POST_HOUSE"
const DELETE_HOUSE = "DELETE_HOUSE"

const initialState = []

const homeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_HOUSES:
      return payload
    case POST_HOUSE:
      return [...state, payload]
    case DELETE_HOUSE:
      return payload
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
  const response = await fetch(url,
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

    const json = await response.json();

  dispatch({
    type: POST_HOUSE,
    payload: json,
  })
};

export const deleteHouse = (id) => async(dispatch) =>{
  const response  = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
  })
  const houses = await response.json();

  dispatch({
    type: DELETE_HOUSE,
    payload: houses,
  })
}