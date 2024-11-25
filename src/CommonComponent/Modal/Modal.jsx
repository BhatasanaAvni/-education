// CommonComponent/Modal/Modal.jsx
import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-customBlue flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6 shadow-lg">
        {/* <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
