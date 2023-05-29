import { useState } from 'react';

interface Props {
  prompt: string;
  tags: string[];
}

const PromptCard = ({ prompt, tags }: Props) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopyButtonClick = () => {
    setShowCopiedText(true);
    navigator.clipboard.writeText(prompt);
  };

  const handleCopyButtomMouseLeave = () => {
    setShowCopiedText(false);
  };

  return (
    <div className="mt-10">
      <h1>Prompt</h1>
      <div className="w-full mt-2 shadow-xl bg-primary-content card ">
        <div className="card-body">
          <p>{prompt}</p>
          <div className="justify-end mt-2 card-actions">
            {/* Badges hidden in mobile */}
            {tags.map((tag) => (
              <div
                className="hidden badge badge-outline"
                key={tag}
              >
                {tag}
              </div>
            ))}
            <div
              className={`${
                showCopiedText
                  ? 'tooltip-open tooltip tooltip-bottom tooltip-secondary '
                  : ''
              }}`}
              data-tip="Copied!"
            >
              <button
                className="btn btn-primary btn-sm"
                onClick={handleCopyButtonClick}
                onMouseLeave={handleCopyButtomMouseLeave}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
