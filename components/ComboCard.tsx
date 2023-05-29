'use client';
import React, { useState } from 'react';
import { prompts } from '../data';
import CardTags from './CardTags';

interface Props {
  prompt: string;
  note: string | undefined;
  tags: string[];
}

const ComboCard = ({ prompt, note, tags }: Props) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopyButtonClick = () => {
    setShowCopiedText(true);
    navigator.clipboard.writeText('test');
  };

  const handleCopyButtonMouseLeave = () => {
    setShowCopiedText(false);
  };
  return (
    <div className="w-full shadow-xl card bg-primary-content">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">Prompts</h2>
          <div
            className={`${
              showCopiedText ? 'tooltip tooltip-open tooltip-accent' : ''
            }}`}
            data-tip="Copied"
          >
            <button
              onClick={handleCopyButtonClick}
              onMouseLeave={handleCopyButtonMouseLeave}
              className="btn btn-accent btn-sm"
            >
              Copy
            </button>
          </div>
        </div>

        <p>{prompt}</p>
        <div className="divider" />
        <h2 className="card-title">Notes</h2>
        <p>{note}</p>
        <CardTags tags={tags} />
      </div>
    </div>
  );
};

export default ComboCard;
