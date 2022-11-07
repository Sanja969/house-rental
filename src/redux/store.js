import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import homeReducer from './home';
import reservationsReducer from './reservations';
import navbarReducer from './navbar';
import reserveReducer from './reserve';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    user: userReducer,
    houses: homeReducer,
    reservations: reservationsReducer,
    navbar: navbarReducer,
    reserve: reserveReducer,
    detail: detailReducer,
  },
});
