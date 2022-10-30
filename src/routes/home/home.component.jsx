import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'

// const house = useSelector(state => state);
// console.log(house);

const Home = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, []);

  const house = useSelector((state) => state.house);
  console.log(house);
  return (
    <div>
      <h1>This is home</h1>
    </div>

  );
};

export default Home;
