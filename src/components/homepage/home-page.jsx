import React from "react"
import { PropTypes } from 'prop-types';


export default function HomePage({
    List: {  id, name, image_data},
})

{
  return (
    <div id={id}>
     <img src={image_data} alt={name} />
     <p>{name}</p>
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

