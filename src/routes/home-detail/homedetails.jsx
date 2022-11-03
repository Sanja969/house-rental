import React from 'react'
import { useSelector} from 'react-redux';
import './homedetails.css';
import {  AiFillCaretLeft } from "react-icons/ai";
import {  BiArrowBack  } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function HomeDetail () {

    const house = useSelector((state) => state.house);
    console.log('house', house)
    return (
        <div className='home-detail'>
            <Link to='/' className='back-mobile'>
                  < BiArrowBack  className='back-mobile-arrow'/>
               </Link>
            <div className="details-item">
               <img className='image-detail' src={house.image_data} alt={house.name} />
               <div className='detail-about'>
                   <h2>{house.name}</h2> <hr className='hr-detail'/>
                   <p>Price: ${house.price} </p><hr className='hr-detail'/>
                   <p>{house.description}</p> <hr className='hr-detail'/>
                   <p>Duration: 1 Month</p> <hr className='hr-detail'/>
               </div>
            </div>
            <div className="btn-detail">
               <Link to='/' className='back-home'>
                  < AiFillCaretLeft  className='back-detail-arrow'/>
               </Link>
               <Link to='/reserve' >
                  <button className='btn-reserve'>Reserve</button>
               </Link>
            </div>
        </div>
    )
}
