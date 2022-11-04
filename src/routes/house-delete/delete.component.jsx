import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './delete.styles.scss'
import DeletePopUp from './delete.confirmation'; 


export default function  HouseDelete () {

    const house = useSelector(state => state.houses);
    const navbar = useSelector(state => state.navbar);
    const [trigger, setTrigger] = useState(false);
  

    const deletehandler = () => {   
        setTrigger(true);
    }

    const deleteConfirmed = (e) => {
        console.log(e.target.id);
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
                            < DeletePopUp id={house.id} trigger={trigger}  setTrigger={setTrigger} deleteConfirmed = {deleteConfirmed} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
