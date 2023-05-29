import React from 'react';
import CardTags from './CardTags';

interface Props {
  note: string;
  tags: string[];
}

const NotesCard = ({ note, tags }: Props) => {
  return (
    <div className="mt-10">
      <h1>Note</h1>
      <div className="w-full mt-2 shadow-xl bg-primary-content card ">
        <div className="card-body">
          <p>{note}</p>
          <CardTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
