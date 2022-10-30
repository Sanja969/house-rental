const url = "http://127.0.0.1:3000/houses"

const GET_HOUSES = "GET_HOUSES"

const initialState = []

const homeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_HOUSES:
        return payload 
        default:
        return state;
    }
}

export default homeReducer;




// Path: src/redux/store.js
// Compare this snippet from src/redux/store.js: