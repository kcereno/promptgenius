'use client';
import React, { useState } from 'react';

import CardTags from './CardTags';
import { PromptI } from '@/models/interfaces';

interface Props {
  prompt: PromptI;
}

const ComboCard = ({ prompt: { goal, prompt, tags } }: Props) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopyButtonClick = () => {
    setShowCopiedText(true);
    navigator.clipboard.writeText(prompt);
  };

  const handleCopyButtonMouseLeave = () => {
    setShowCopiedText(false);
  };
  return (
    <div className="w-full shadow-xl card bg-primary-content md:basis-[40%] md:flex-1 md:max-w-[50%] h-90 ">
      <div className="card-body">
        <div>
          <h2 className="card-title">Goal</h2>
          <p>{goal}</p>
        </div>

        <div className="divider" />

        <div className="">
          <h2 className="card-title">Prompt</h2>
          <p>{prompt}</p>
        </div>
        <CardTags tags={tags} />
        <div className="justify-end mt-5 card-actions">
          <button className="btn btn-outline btn-accent btn-sm">Notes</button>
          <div
            className={`${
              showCopiedText
                ? 'tooltip tooltip-bottom tooltip-open tooltip-accent bg-pink-500'
                : ''
            }}`}
            data-tip="Copied"
          >
            <button
              onClick={handleCopyButtonClick}
              onMouseLeave={handleCopyButtonMouseLeave}
              className="btn btn-accent btn-sm"
            >
              Copy Prompt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;
