import React from 'react'
import PropTypes from 'prop-types';
import './delete.styles.scss'

function DeletePopUp(props) {

    return (props.trigger) ? (


        <div>
            <div className="modal">
              <div className="modalContent">
              <span className="close">×</span>
              <p className='delete-title'>Are you sure you want to delete your this House</p>
              <div className='yes-no-btn'>
                 <button className="del" id={props.id} onClick={props.deleteConfirmed}>Yes</button>
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
    id: PropTypes.instanceOf(Object).isRequired,
  };

export default DeletePopUp;
