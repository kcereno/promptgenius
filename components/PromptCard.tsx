import { convertStringToArray } from '@/util/general';
import { useState } from 'react';

interface Props {
  prompt: string;
}

const PromptCard = ({ prompt }: Props) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopyButtonClick = () => {
    setShowCopiedText(true);
    navigator.clipboard.writeText(prompt);
  };

  const handleCopyButtonMouseLeave = () => {
    setShowCopiedText(false);
  };

  const convertedString = convertStringToArray(prompt);
  console.log('PromptCard ~ convertedString:', convertedString);

  return (
    <div>
      <div className="flex justify-between">
        <h1>Prompt</h1>
        <div
          className={`${
            showCopiedText ? 'tooltip tooltip-open tooltip-left' : ''
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

      <div>
        <div className="w-full mt-2 shadow-xl bg-primary-content card">
          <div className="card-body">
            {convertedString.map((string) => (
              <p key={string}>{string}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
