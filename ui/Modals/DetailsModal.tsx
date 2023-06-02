import { PromptI } from '@/models/interfaces';
import React from 'react';

interface Props {
  note: string;
}

const DetailsModal = ({ note }: Props) => {
  console.log('DetailsModal ~ note:', note);
  return (
    <>
      <input
        type="checkbox"
        id="notes-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold">Notes</h2>
          <p className="py-4">{note}</p>
          <div className="modal-action">
            <label
              htmlFor="notes-modal"
              className="btn"
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
