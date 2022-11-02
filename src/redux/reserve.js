const url = "http://127.0.0.1:3000/reservations"

const POST_RESERVATION = "POST_RESERVATION"

const initialState = []

const reserveReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_RESERVATION:
            return payload
        default:
            return state;
    }
}

export default reserveReducer;

export const postReservation = (reservation) => async (dispatch) => {
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify({
                house_id: reservation.houseId,
                user_id: reservation.userId,
                date: reservation.date,
                total_price: reservation.totalPrice
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
    const reservationData = await response.json();

    dispatch({
        type: POST_RESERVATION,
        payload: reservationData
    })
}