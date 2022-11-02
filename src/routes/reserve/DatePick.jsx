import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { useSelector } from 'react-redux';

import './reserve.styles.scss';

const DatePick = () => {
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const houses = useSelector((state) => state.house);
    return (
        <div className="reserve">
            <h1>Choose your desired staying period</h1>
            <p>Reservations will be depending on the availability of the houses</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setError(null);
                handleSubmit(houses);
                // availability(setError, setAvailableHouses, startDate, setLoading);
            }}>
                <p className="text-danger mb-1 ">
                    {error && error.message}
                </p>
                <div className="date-picker">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setError(null);
                        }}
                        withPortal
                    />
                    {loading ? (
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (                            
                        <button type="submit" className="btn">
                            Available Houses
                        </button>
                    )
                }
                </div>
            </form>    
        
        </div>
    )
}

export default DatePick;