import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirm } from "react-confirm-box";
import DatePicker from "react-datepicker";
import * as BsIcons from "react-icons/bs";
import './reserve.styles.scss';
import { postReservation }  from '../../redux/reserve';

const Reserve = () => {
    const [availableHouses, setAvailableHouses] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [selectedHouse, setSelectedHouse] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const houses = useSelector((state) => state.houses);

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 5000);
    }, [
        error
    ]);

    const handleSubmit = (houses) => {
        if(!startDate || !endDate) {
            setError('Please select your desired staying period');
            return;
        } else {
            setLoading(true);
            setError(null);
            setAvailableHouses(
                houses.filter((house) => house.available === true)
            );
        }
    }

    const options = {
        render: (message, onConfirm, onCancel) => {
            return (
                <div className="confirm-box">
                    <div className="confirm">
                        <p className="confirm-text">{message}</p>
                        <div className='confirm-details'>
                            <h3>Your reservation details</h3>
                            <p>House</p>
                            <p>House address</p>
                            <p>House Price</p>
                            <p>Rent Period</p>
                        </div>
                        <div className="confirm-btns">
                            <button className="confirm-btn" onClick={onConfirm}>Yes</button>
                            <button className="confirm-btn" onClick={onCancel}>No</button>
                        </div>
                    </div>
                </div>
            );
        },
    }

    const handleConfirm = async (id) => {
        const result = await confirm("Are you sure you want to reserve this house?", options);
        if (result) {
            handlePost(id)
            navigate('/my-reservations');
        }
    }

    const handlePost = (id) => {
        const status = 'pending';
        const house_id = id;
        const date = startDate;
        const user_id = user.id
        const end_date = endDate;
        const data = { status, date, user_id, house_id, end_date };
        dispatch(postReservation(data));
    }

    const changeLayout = () => {
        setAvailableHouses([]);
        setLoading(false)
    }

    if (availableHouses.length > 0) {
        return (
            <div className="reserve">
                <BsIcons.BsFillArrowLeftSquareFill className="back" onClick={changeLayout} />
                <h1>Choose your desired house</h1>
                <p>Reservations will be depending on the availability of the houses</p>
                <div className="houses">
                    {availableHouses.map((house) => (
                        <div className="house" key={house.id}>
                            <div className="house-image">
                                <img src={house.image_data} alt={house.name} />
                            </div>
                            <div className="house-info">
                                <h3>{house.name}</h3>
                                <p>City: {house.city}</p>
                                <p>Address: {house.adress}</p>
                                <p>Price: {parseInt(house.price)} USD</p>
                                <p>{house.description}</p>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setSelectedHouse(house)
                                        console.log(selectedHouse)
                                        handleConfirm(house.id)
                                    }
                                    }
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        )
    }

    return (
        <div className="reserve">
            {error ? <div className="error">{error}</div> : null}
            <h1>Choose your desired period and city of residence</h1>
            <p>Reservations will be depending on the availability of the houses</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                handleSubmit(houses);
            }}>
                <p className="text-danger mb-1 ">
                    {error && error.message}
                </p>
                <div className="date-picker">
                    <DatePicker
                        selectsRange={true}
                        placeholderText="Select your desired period"
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                          setDateRange(update);
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
    );
}

export default Reserve;