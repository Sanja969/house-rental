import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../redux/home';
import DatePick from './DatePick';
import HousePick from './HousePick';
import './reserve.styles.scss';

const Reserve = () => {
    const [availableHouses, setAvailableHouses] = useState([]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHouses());
    }, []);

    const house = useSelector((state) => state.house);

    console.log(house);

    if (availableHouses.length > 0) {
        return (
            <HousePick availableHouses={availableHouses} />
        )
    }

    return (
        <DatePick />
    );
}

export default Reserve;