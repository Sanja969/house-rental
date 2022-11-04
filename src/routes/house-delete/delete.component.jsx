import React from 'react'
import { useSelector } from 'react-redux';
import './delete.styles.scss'

export default function  HouseDelete () {

    const house = useSelector(state => state.houses);
    const navbar = useSelector(state => state.navbar);

    const deletehandler = () => {   
        fetch(`http://localhost:3000/houses/${house.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
    }
    
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
                            <button className='delete-btn' onClick={deletehandler}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
