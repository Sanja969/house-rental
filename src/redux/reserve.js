import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = "http://127.0.0.1:3000/reservations"

export const postReservation = createAsyncThunk(
    'reserve/postReservation',
    async (reservation, thunkAPI) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation)
        })
        const { reservations } = thunkAPI.getState().reserve
        return reservations
    }
)

export const reserveSlice = createSlice({
    name: 'reserve',
    initialState: {
        reservations: []
    },
    reducers: {},
    extraReducers: {
        [postReservation.fulfilled]: (state, action) => {
            state.reservations = action.payload
        }
    }
    });

export const selectReservations = state => state.reserve.reservations
export default reserveSlice.reducer;
