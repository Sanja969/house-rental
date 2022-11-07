import React from "react"
import { PropTypes } from 'prop-types';
import './house.styles.scss';
import { Link, Navigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHouse } from "../../redux/detail";

const House = ({ house }) =>
{
  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(getHouse(house));
  }

  const { image_data, name, description} = house;
  const user = useSelector(state => state.user);
  return (
    <>
      {!user.username ? <Navigate to='/auth' /> : <div className="house-box">
        <Link to='/house' >
          <img className="home-image" src={image_data} alt={name} onClick={handleDetails} />
        </Link>
        <h3 className="home-name">{name}</h3>
        <p className="home-description">{description}</p>
        </div>}
    </>
  )
}

House.propTypes = {
  house: PropTypes.instanceOf(Object).isRequired,
};

export default House;


