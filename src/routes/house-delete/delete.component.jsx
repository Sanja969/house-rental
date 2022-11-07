import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './delete.styles.scss'
import DeletePopUp from './delete.confirmation'; 
import { getHouse } from '../../redux/detail';

export default function  HouseDelete () {

  const houses = useSelector(state => state.houses);
  const user = useSelector(state => state.user);
  const navbar = useSelector(state => state.navbar);
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);

  const handle = (house) => {
    setTrigger(true);
    dispatch(getHouse(house))
  }

  return !user.username ? <Navigate to="/auth" /> : (
    <>{user.role !== 'admin' ? <Navigate to="/" /> :
      (<div className= {navbar? 'house-list-delete active' : 'house-list-delete'}>
        <h2>Delete house</h2>
        {
          houses.map((house) => {                 
            return (
              <div className='delete-container' key={house.id}>
                <img className='image-delete' src={house.image_data} alt={house.name} />
                <div>
                  <h2>{house.name}</h2>
                  <button className='delete-btn' id={house.id} onClick={() => handle(house)} >Delete</button>
                  < DeletePopUp trigger={trigger}  setTrigger={setTrigger} />
                </div>
              </div>
            )
          })
        }
      </div>)
    }</>

  )
}
