import React from "react";

const ConfirmationModal = ({ onConfirm, onCancel, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{children || "Are you sure you want to proceed?"}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
