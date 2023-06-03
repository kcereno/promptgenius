import React from 'react';

interface Props {
  modalId: string;
  className?: string;
  text: string;
  notes?: string;
  onClick?: any;
}

const OpenModalButton = ({ modalId, className, text, onClick }: Props) => {
  return (
    <label
      htmlFor={modalId}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </label>
  );
};

export default OpenModalButton;
