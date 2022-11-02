import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../redux/home';
import DatePick from './DatePick';
import HousePick from './HousePick';
import './reserve.styles.scss';

const Reserve = () => {
    const [availableHouses, setAvailableHouses] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHouses());
    }, []);

    const houses = useSelector((state) => state.house);

    const handleSubmit = () => {
        console.log('submit');
        console.log(startDate);
        const availableHouses = houses
    }

    if (availableHouses.length > 0) {
        return (
            <HousePick
                availableHouses={availableHouses}
                startDate={startDate}
                setAvailableHouses={setAvailableHouses}
            />
        )
    }

    return (
        <DatePick
            startDate={startDate}
            setStartDate={setStartDate}
            setAvailableHouses={setAvailableHouses}
        />
    );
}

export default Reserve;