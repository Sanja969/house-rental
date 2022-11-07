import React from 'react'
import PropTypes from 'prop-types';
import './delete.styles.scss'
import { deleteHouse } from '../../redux/home';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DeletePopUp({ trigger, setTrigger }) {
  
  const dispatch = useDispatch();
  const house = useSelector(state => state.detail)

  const handleDelete = (id) => {
    return dispatch(deleteHouse(id))
  }

    return trigger ? (
        <div>
            <div className="conf-box">
              <div className="conf-content">
                <p className='delete-title'>Are you sure you want to delete your this House?</p>
                <div className='answer'>
                  <Link to='/'><button className="yes" onClick={() => handleDelete(house.id)}>Yes</button></Link>
                  <button className="no" onClick = {() => setTrigger(false)}>No</button>
                </div>
              </div>
            </div>
        </div>
    ) : '';
}

DeletePopUp.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.instanceOf(Object).isRequired,

  };

export default DeletePopUp;
