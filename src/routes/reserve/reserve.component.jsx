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

    const handleSubmit = (houses) => {
        setAvailableHouses(houses);
    }

    if (availableHouses.length > 0) {
        return (
            <HousePick
                houses={houses}
                startDate={startDate}
            />
        )
    }

    return (
        <DatePick
            startDate={startDate}
            setStartDate={setStartDate}
            setAvailableHouses={availableHouses}
            houses = {houses}
            handleSubmit={handleSubmit}
        />
    );
}

export default Reserve;