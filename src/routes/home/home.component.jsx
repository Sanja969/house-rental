import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'
import HomePage from '../../components/homepage/home-page';
import './home.css';


const Home = () => {
  const [list, setValue] = useState({
    i: 0,
    n: 3,
  });
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, []);

  const house = useSelector((state) => state.house);

  const tophouses = house.slice(list.i, list.n);
 


  return (
    <div>
      <h1>List of Houses</h1>
      <div className="all-houses">
       <button type="button"
        onClick={() => setValue({
          i: list.i - 2,
          n: list.n - 2,
        })}>back</button> 
      {
      tophouses.map((item) => (<HomePage key={item.id} List={item} />))
      }
      <button   type="button"
        onClick={() => setValue({
          i: list.i + 2,
          n: list.n + 2,
        })}>forward</button>
      </div>
    </div>

  );
};

export default Home;
