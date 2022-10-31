import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'
import HomePage from '../../components/homepage/home-page';
import './home.css';


const Home = () => {
 let n = 3;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, []);

  const house = useSelector((state) => state.house);

  const tophouses = house.filter((house) => house.id <= n);
  console.log(tophouses);

  return (
    <div>
      <h1>List of Houses</h1>
      <div className="all-houses">
       <button>back</button> 
      {
      tophouses.map((item) => (<HomePage key={item.id} List={item} />))
      }
      <button>forward</button>
      </div>
    </div>

  );
};

export default Home;
