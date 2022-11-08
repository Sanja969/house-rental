import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import House from '../../components/house/house.component';
import './home.styles.scss';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Home = () => {
  const firstThree = {i: 0, n: 3,}
  const [indexes, setIndexes] = useState(firstThree);

  const navbar = useSelector(state => state.navbar)

  const houses = useSelector((state) => state.houses);

  const display_houses = houses.slice(indexes.i, indexes.n);

  const next = () => {
    if (indexes.n < houses.length) {
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
    <div className={navbar? 'home active' : 'home'}>
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
        <hr className='hr-btn'/>
        <div className='btns'>
            <div className="prev-mob" onClick={prev}>
              < AiFillCaretLeft className="back-arrow"/>
            </div> 
            <div className="next-mob" onClick={next}>
              < AiFillCaretRight  className='next-arrow'/>
            </div>
        </div>  
      </div>
    </div>

  );
};

export default Home;
