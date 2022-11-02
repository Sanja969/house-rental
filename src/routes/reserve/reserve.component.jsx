import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import { getHouses } from '../../redux/home';
import './reserve.styles.scss';

const Reserve = () => {
    const [availableHouses, setAvailableHouses] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const cities = [
        { value: 'New Jersey', label: 'New Jersey' },
        { value: 'New York', label: 'New York' },
        { value: 'California', label: 'California' },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHouses());
    }, []);

    const houses = useSelector((state) => state.house);

    const handleSubmit = (value) => {
        setAvailableHouses(value);
        // setAvailableHouses(
        //     value.filter((house) => {
        //         return house.city === selectedCity.value;
        //     })
        // )
    }

    if (availableHouses.length > 0) {
        return (
            <div className="reserve">
                <h1>Choose your desired house</h1>
                <p>Reservations will be depending on the availability of the houses</p>
                <div className="houses">
                    {houses.map((house) => (
                        <div className="house" key={house.id}>
                            <div className="house-image">
                                <img src={house.image_data} alt={house.name} />
                            </div>
                            <div className="house-info">
                                <h3>{house.name}</h3>
                                <p>{house.description}</p>
                                <p>Price: {parseInt(house.price)} USD</p>
                                <button
                                    className="btn"
                                    onClick={() => setSelectedHouse(house)}
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
            <h1>Choose your desired period and city of residence</h1>
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
                <Select className="selectbox" options={cities} onChange={setSelectedCity} c />
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
    );
}

export default Reserve;