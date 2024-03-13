import React from 'react'
import '../styles/FormModel.css'

function FormModel({  closeModal, children }) {
  return (
    <div
    className="form-modal-container"
    onClick={(e) => {
        if (e.target.className === "form-modal-container")
            closeModal(false);
    }}
>
    <div className="form-modal">
        <div className="form-modal-header">
            <h4>Recomendation Form</h4>
            <div onClick={closeModal} className="close">X</div>
        </div>
        <div className="form-modal-content">{children}</div>
    </div>
</div>
  )
}

export default FormModel