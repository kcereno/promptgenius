import React from 'react';

interface Props {
  modalId: string;
  classNames?: string;
  text: string;
  notes?: string;
}

const OpenModalButton = ({ modalId, classNames, text }: Props) => {
  return (
    <label
      htmlFor={modalId}
      className={`btn ${classNames}`}
    >
      {text}
    </label>
  );
};

export default OpenModalButton;
