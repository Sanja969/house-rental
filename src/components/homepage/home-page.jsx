import React from "react"
import { PropTypes } from 'prop-types';
import './home-page.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getHousesDetails} from '../../redux/home'
import { FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";

export default function HomePage({
    List: {  id, name, image_data},
})

{

    const dispatch = useDispatch();
    const handleDetails = (e) => {
      
         const id = parseInt(e.target.id)
         
        dispatch(getHousesDetails(id));
    }


  return (
    <div  className="house">
      <Link to='/house' >
     <img src={image_data} alt={name}  className="home-image" id={id}  onClick={handleDetails} />
      </Link>
     <h3>{name}</h3><hr className="hr-home-name"/>
     <ul className="social-media">
         <li className="social-item"><FiFacebook/></li>
        <li  className="social-item"><FiTwitter/></li>
        <li  className="social-item"><FiInstagram/></li>
     </ul>
    </div>
  )
}


HomePage.propTypes = {
    List: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_data: PropTypes.string.isRequired,
    }).isRequired,
};

