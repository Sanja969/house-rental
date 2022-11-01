import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getHouses} from '../../redux/home'
import House from '../../components/house/house.component';
import './home.styles.scss';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Home = () => {
  const firstThree = {i: 0, n: 3,}
  const [indexes, setIndexes] = useState(firstThree);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, []);

  const house = useSelector((state) => state.house);

  const display_houses = house.slice(indexes.i, indexes.n);

  const next = () => {
    if (indexes.n < house.length) {
      setIndexes({i: indexes.i + 3, n: indexes.n + 3,});
    }
    else {
      setIndexes(firstThree);
    }   
  };

  const prev = () => {
    if (indexes.i > 3) {
      setIndexes({i: indexes.i - 3, n: indexes.n - 3,});
    }
    else {
      setIndexes(firstThree);
    }
  };

  return (
    <div className='home'>
      <h1 className="home-title">Latest Houses</h1>
      <p className='home-paragraph'>Please select a house</p>
      <p className='dashes'>----------------------------</p>
      <div className="houses-box">
        <div className="prev" onClick={prev}>
          < AiFillCaretLeft className="back-arrow"/>
        </div>
        {
        display_houses.map((house) => (<House key={house.id} house={house} />))
        }
        <div className="next" onClick={next}>
        < AiFillCaretRight  className='next-arrow'/>
        </div>        
      </div>
    </div>

  );
};

export default Home;
