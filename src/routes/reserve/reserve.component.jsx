import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../redux/home';
import DatePicker from "react-datepicker";
import * as BsIcons from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './reserve.styles.scss';

const Reserve = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="reserve">
            <h1>Choose your desired staying period</h1>
            <p>Reservations will be depending on the availability of the houses</p>
            <div className="date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    withPortal
                />
                <BsIcons.BsFillCalendarDateFill />
            </div>
            <button className="btn">Available Houses</button>
        </div>
    )
}

export default Reserve;