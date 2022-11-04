import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import homeReducer from './home';
import reservationsReducer from './reservations';
import navbarReducer from './navbar';
import reserveReducer from './reserve';

export const store = configureStore({
  reducer: {
    user: userReducer,
    houses: homeReducer,
    reservations: reservationsReducer,
    navbar: navbarReducer,
    reserve: reserveReducer
  },
});
