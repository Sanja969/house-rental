import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import homeReducer from './home';
import reservationsReducer from './reservations';
import navbarReducer from './navbar';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    user: userReducer,
    houses: homeReducer,
    reservations: reservationsReducer,
    navbar: navbarReducer,
    detail: detailReducer,
  },
});
