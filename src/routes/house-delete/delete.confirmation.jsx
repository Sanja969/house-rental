import React from 'react'
import PropTypes from 'prop-types';
import './delete.styles.scss'
import { Link } from 'react-router-dom';

function DeletePopUp(props) {

    return (props.trigger) ? (


        <div>
            <div className="modal">
              <div className="modalContent">
              <p className='delete-title'>Are you sure you want to delete your this House</p>
              <div className='yes-no-btn'>
                <Link to='/'><button className="del" value={props.selectedhouse} onClick={props.deleteConfirmed}>Yes</button></Link>
                 <button className="no" onClick = {() => props.setTrigger(false)}>No</button>
              </div>
              </div>
            </div>
        </div>
    ) : "";
}

DeletePopUp.propTypes = {
    trigger: PropTypes.instanceOf(Object).isRequired,
    setTrigger: PropTypes.instanceOf(Object).isRequired,
    deleteConfirmed: PropTypes.instanceOf(Object).isRequired,
    selectedhouse: PropTypes.instanceOf(Object).isRequired,
  };

export default DeletePopUp;
