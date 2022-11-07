import React from 'react'
import { useSelector} from 'react-redux';
import './detail.styles.scss';
import {  AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';

export default function Detail () {
  const house = useSelector((state) => state.detail);

  const navbar = useSelector(state => state.navbar)
  
  return (
    <div className={navbar? 'detail active' : 'detail'}>
      <h1>{house.name}</h1>
      <p>20% deposit upon any House Booking</p>
      <div className="detail-container">
        <img className='detail-image' src={house.image_data} alt={house.name} />
        <div className='detail-about'>
          <table>
            <tbody>
              <tr><td>Price for night</td><td>$ {house.price} </td></tr>
              <tr><td>Finnance fee</td><td>$ {house.price/20}</td></tr>
              <tr><td>Total amount</td><td>$ {house.price + house.price/20}</td></tr>
              <tr><td>Breakfast included</td><td>$ 10 per person</td></tr>
              <tr><td>Living room</td><td>1</td></tr>
              <tr><td>Bedroom</td><td>2</td></tr>
              <tr><td>WiFi</td><td>Availabe</td></tr>
              <tr><td>City</td><td>{house.city}</td></tr>
              <tr><td>Adress</td><td>{house.adress}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <Link to='/reserve' >
        <Button buttonType="reserve">Reserve</Button>
      </Link>
      <Link to='/' className='prev'>
        < AiFillCaretLeft  className='back-arrow'/>
      </Link>
    </div>
  )
}
