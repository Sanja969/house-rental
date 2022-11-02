import React from 'react'
import { useSelector} from 'react-redux';
import './homedetails.css';
import {  AiFillCaretLeft } from "react-icons/ai";

export default function HomeDetail () {

    const house = useSelector((state) => state.house);
    console.log('house', house)
    return (
        <div>
            <div className="">
               <h2>{house.name}</h2>
               <img className='image-detail' src={house.image_data} alt={house.name} />
            </div>
            <div>
               <div className="back-arrow">
                  < AiFillCaretLeft />
               </div>
               <button>Reserve</button>
            </div>
        </div>
    )
}
