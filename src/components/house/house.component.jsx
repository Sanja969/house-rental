import React from "react"
import { PropTypes } from 'prop-types';
import './house.styles.scss';
import { Link, Navigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getHousesDetails} from '../../redux/home'

const House = ({ house }) =>
{
  const dispatch = useDispatch();
  const handleDetails = (e) => {
    
       const id = parseInt(e.target.id)
       console.log('id', id)
      dispatch(getHousesDetails(id));
  }

  const { image_data, name, id, description} = house;
  const user = useSelector(state => state.user);
  return (
    <>
      {!user.username ? <Navigate to='/auth' /> : <div className="house-box">
        <Link to='/house' >
          <img className="home-image" src={image_data} alt={name} id={id} onClick={handleDetails} />
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


