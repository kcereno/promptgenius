import React from 'react';

interface Props {
  note: string;
}

const NotesCard = ({ note }: Props) => {
  return (
    <div className="mt-10">
      <h1>Note</h1>
      <div className="w-full mt-2 shadow-xl bg-primary-content card ">
        <div className="card-body">
          <p>{note}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
