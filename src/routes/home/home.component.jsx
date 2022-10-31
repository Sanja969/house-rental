import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'
import HomePage from '../../components/homepage/home-page';
import './home.css';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";


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

  const next = () => {
    if (list.n < house.length) {
      setValue({
        i: list.i + 3,
        n: list.n + 3,
      });
    }
    else {
      setValue({
        i: 0,
        n: 3,
      });
    }   
  };

  const prev = () => {
    if (list.i > 0) {
      setValue({
        i: list.i - 3,
        n: list.n - 3,
      });
    }
    else {
      setValue({
        i: 0,
        n: 3,
      });
    }
  };

  


  return (
    <div>
      <h1 className="home-title">List of Houses</h1>
      <p className='home-paragraph'>Please select a house</p>
      <div className="all-houses">
      <div className="prev" onClick={prev}>
       <div className="back-arrow">
      < AiFillCaretLeft />
      </div>
      </div>
  
      {
      tophouses.map((item) => (<HomePage key={item.id} List={item} />))
      }
      <div className="next" onClick={next}>
       < AiFillCaretRight  className={'next-arrow'}/>
      </div>        
      </div>
    </div>

  );
};

export default Home;
