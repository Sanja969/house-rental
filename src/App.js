import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Detail from './routes/detail/detail.component.jsx';
import Authentication from './routes/authentication/authentication.component';
import MyReservations from './routes/my-reservations/my-reservations.component';
import { getHouses } from './redux/home';
import { getReservations } from './redux/reservations';
import HouseDelete  from './routes/house-delete/delete.component';
import Reserve from './routes/reserve/reserve.component';
import AddHouse from './routes/add-house/add-house.component';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
    dispatch(getReservations());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="house" element={<Detail />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="delete-house" element={<HouseDelete />} />
        <Route path="my-reservations" element={<MyReservations />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="add-house" element={<AddHouse />} />
      </Route>
    </Routes>
  )
};

export default App;
