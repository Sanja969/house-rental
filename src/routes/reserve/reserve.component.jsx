import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../redux/home';
import DatePick from './DatePick';
import './reserve.styles.scss';

const Reserve = () => {
    const [availableHouses, setAvailableHouses] = useState([]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHouses());
    }, []);

    const house = useSelector((state) => state.house);

    console.log(house);

    return (
        <DatePick />
    );
}

export default Reserve;