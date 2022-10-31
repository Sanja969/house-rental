import React from "react"
import { PropTypes } from 'prop-types';


export default function HomePage({
    List: {  id, name, image_data, description, price },
})

{
  return (
    <div id={id}>
     <img src={image_data} alt={name} />
     <p>{description}</p>
    <p>{price}</p>
    </div>
  )
}


HomePage.propTypes = {
    List: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_data: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

