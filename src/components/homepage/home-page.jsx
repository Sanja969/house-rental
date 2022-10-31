import React from "react"
import { PropTypes } from 'prop-types';
import './home-page.css';
import { FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";

export default function HomePage({
    List: {  id, name, image_data},
})

{
  return (
    <div id={id} className="house">
     <img src={image_data} alt={name}  className="home-image"/>
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

