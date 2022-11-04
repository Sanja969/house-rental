const url = "http://127.0.0.1:3000/houses"

const GET_HOUSES = "GET_HOUSES"
const GET_HOUSES_DETAILS = "GET_HOUSES_DETAILS"

const initialState = []

const homeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_HOUSES:
        return payload 
        case GET_HOUSES_DETAILS:
        return payload
        default:
        return state;
    }
}

export default homeReducer;

export const getHousesDetails = (id) => async(dispatch) => { 
    const response = await fetch(url);
    const houses = await response.json();
    const house = houses.find(house => house.id === id)
    
    dispatch({
        type: GET_HOUSES_DETAILS,
        payload: house
    })
}


export const getHouses = () => async(dispatch) => { 
    const response = await fetch(url);
    const houses = await response.json();
    
    dispatch({
        type: GET_HOUSES,
        payload: houses
    })
}
