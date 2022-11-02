import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import homeReducer from './home';
import reserveReducer from './reserve';

export const store = configureStore({
  reducer: {
    user: userReducer,
    house: homeReducer,
    reserve: reserveReducer
  },
});
