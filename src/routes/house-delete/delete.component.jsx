import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './delete.styles.scss'
import DeletePopUp from './delete.confirmation'; 


export default function  HouseDelete () {

    const house = useSelector(state => state.houses);
    const navbar = useSelector(state => state.navbar);
    const [trigger, setTrigger] = useState(false);
    const [selectedhouse, setSelectedHouse] = useState(0);
  

    const deletehandler = (e) => {   
        setSelectedHouse(e.target.id);
        setTrigger(true);
    }

    const deleteConfirmed = (e) => {
        console.log(e.target.value);
        const url = `http://localhost:3000/houses/${e.target.value}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${navbar.token}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        }
        )
    

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
                            <button className='delete-btn' id={house.id} onClick={deletehandler}>Delete</button>
                            < DeletePopUp selectedhouse={selectedhouse}  trigger={trigger}  setTrigger={setTrigger} deleteConfirmed = {deleteConfirmed} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
