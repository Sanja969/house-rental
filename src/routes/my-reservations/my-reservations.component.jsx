import React from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../../components/reservation/reservation.component';
import { Navigate } from 'react-router-dom';

import './my-reservations.styles.scss';

const MyReservations = () => {
  const navbar = useSelector(state => state.navbar);
  const user = useSelector(state => state.user);

  const reservations = useSelector(state => state.reservations);

  const userReservations = reservations.filter(res => res.user_id === user.id);

  const houses = useSelector(state => state.houses);

  return (
    <>
      {!user.username ? <Navigate to="/auth" /> :(
        <div className={navbar? 'reservations active' : 'reservations'}>
        <h2>Your reservations</h2>
        {userReservations.map(res => 
          (
          <Reservation house = {houses.find(house => house.id === res.house_id)} reservation= {res}  key={res.id} />
          ))}
      </div>
      )
      }
    </>
  );
};

export default MyReservations;