import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import  homeReducer from './home';

export const store = configureStore({
  reducer: {
    user: userReducer,
    house: homeReducer,
  },
});
