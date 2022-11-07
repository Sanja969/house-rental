import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './delete.styles.scss'
import DeletePopUp from './delete.confirmation'; 
import { getHouse } from '../../redux/detail';

export default function  HouseDelete () {

  const houses = useSelector(state => state.houses);
  const navbar = useSelector(state => state.navbar);
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);

  const handle = (house) => {
    setTrigger(true);
    dispatch(getHouse(house))
  }

  return (
    <div className= {navbar? 'house-list-delete active' : 'house-list-delete'}>
      {
        houses.map((house) => {                 
          return (
            <div className='delete-container' key={house.id}>
              <img className='image-delete' src={house.image_data} alt={house.name} />
              <div className='house-data'>
              <h1>{house.name}</h1><hr />
              <p>{house.description}</p>
              <p>{house.price}</p>
              <button className='delete-btn' id={house.id} onClick={() => handle(house)} >Delete</button>
              < DeletePopUp trigger={trigger}  setTrigger={setTrigger} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
