import React from 'react';
import { PropTypes } from 'prop-types';
import './reservation.styles.scss';

const Reservation = ({reservation, house}) => {
  const { name, image_data, city, adress, price } = house;
  const { date, end_date } = reservation;
  const startDate = new Date(date);
  const endDate = new Date(end_date);
  const difference = endDate.getTime() - startDate.getTime();
  const daysNumber = Math.ceil(difference / (1000 * 3600 * 24));
  return (
    <div className='reservation'>
      <img src={image_data} />
      <div>
        <h3>{name}</h3>
        <p>Period: {startDate.toDateString()} - {endDate.toDateString()}</p>
        <p>Number of days: {daysNumber}</p>
        <p>City: {city}</p>
        <p>Adress: {adress}</p>
        <p>Price per day: $ {parseFloat(price).toFixed(2)}</p>
        <p>Total price: $ {parseFloat(price * daysNumber).toFixed(2)}</p>
      </div>
    </div>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
  house: PropTypes.instanceOf(Object).isRequired,
};

export default Reservation;