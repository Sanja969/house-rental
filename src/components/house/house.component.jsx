import React from "react"
import { PropTypes } from 'prop-types';
import './house.styles.scss';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const House = ({ house }) => {
  const { image_data, name, id, description} = house;
  const user = useSelector(state => state.user);
  return (
    <>
      {!user.username ? <Navigate to='/auth' /> : <div className="house-box">
        <Link to='/house' id={id}>
          <img className="home-image" src={image_data} alt={name} />
        </Link>
        <h3 className="home-name">{name}</h3>
        <p className="home-description">{description}</p>
        <div className="home-links">
          <Link to='/house' className="detail-link">Detail</Link>
          <Link to="/reserve" className="reserve">Reserve</Link>
        </div>
        </div>}
    </>
  )
}

House.propTypes = {
  house: PropTypes.instanceOf(Object).isRequired,
};

export default House;


