import React from 'react';
import CardTags from './CardTags';
import { convertStringToArray } from '@/util/general';

interface Props {
  note: string;
  tags: string[];
}

const NotesCard = ({ note, tags }: Props) => {
  const convertedString = convertStringToArray(note);
  return (
    <div className="mt-10">
      <h1>Note</h1>
      <div className="w-full mt-2 shadow-xl bg-primary-content card ">
        <div className="card-body">
          {convertedString.map((string) => (
            <p key={string}>{string}</p>
          ))}
          <CardTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
