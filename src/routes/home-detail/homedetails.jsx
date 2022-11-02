import React from 'react'
import { useSelector} from 'react-redux';
import './homedetails.css';
import {  AiFillCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function HomeDetail () {

    const house = useSelector((state) => state.house);
    console.log('house', house)
    return (
        <div className='home-detail'>
            <div className="details-item">
               <img className='image-detail' src={house.image_data} alt={house.name} />
               <div className='detail-about'>
                   <h2>{house.name}</h2> 
                    <p>{house.description}</p>
               </div>
            </div>
            <div className="">
               <Link to='/' >
                  < AiFillCaretLeft />
               </Link>
               <Link to='/reserve' >
                  <button>Reserve</button>
               </Link>
            </div>
        </div>
    )
}
