import React from 'react'
import { useSelector } from 'react-redux';
import './delete.styles.scss'

 const HouseDelete = () => {

    const house = useSelector(state => state.houses);
    const navbar = useSelector(state => state.navbar)
  
    return (
        <div className= {navbar? 'house-list-delete active' : 'house-list-delete'}>
            {
                house.map((house, index) => {                 
                    return (
                        <div className='delete-container' key={index}>
                            <img className='image-delete' src={house.image_data} alt={house.name} />
                            <div className='house-data'>
                            <h1>{house.name}</h1><hr />
                            <p>{house.description}</p>
                            <p>{house.price}</p>
                            <button className='delete-btn'>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HouseDelete;
