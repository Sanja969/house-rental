import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'
import HomePage from '../../components/homepage/home-page';


const Home = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, []);

  const house = useSelector((state) => state.house);
  console.log(house);
  return (
    <div>
      <h1>List of Houses</h1>
      <div className="all-houses">
       
      {
      house.map((item) => (<HomePage key={item.id} List={item} />))
      }
      </div>
    </div>

  );
};

export default Home;
