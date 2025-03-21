import React from 'react'
import "./PopupModal.css"
const PopupModal = ({onDelete, onCancel, row}) => {
    // const handleDeleteRow = (targetIndex) => {
    //     setRows(rows.filter((_, idx) => idx !== targetIndex));
    //   };
 
  return (
    <div className="modal-container">
     <div className="modal">
      <form>
        
        <div className='form-group'>
            <label htmlFor='question'>
              Do you want to delete {row.page}? 
            </label>
        </div>
        <div className='button-group'>
        <div className='form-group'>
        <button type="button" className='btn'  onClick={onDelete}> Delete
        </button></div>
        <div className='form-group'>
            <button type="button" className='btn' onClick={onCancel}>Cancel</button>
        </div>
        </div>
      </form>
     </div>
    </div>
  )
}

export default PopupModal