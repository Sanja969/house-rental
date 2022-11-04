import React from 'react'
import { useSelector } from 'react-redux';
import './delete.styles.scss'

 const HouseDelete = () => {

    const house = useSelector(state => state.houses);
    console.log(house);
    return (
        <div>
            {
                house.map((house, index) => {                 
                    return (
                        <div className='delete-container' key={index}>
                            <img src={house.image_data} alt={house.name} />
                            <div className='house-data'>
                            <h1>{house.name}</h1>
                            <p>{house.description}</p>
                            <p>{house.address}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HouseDelete;
