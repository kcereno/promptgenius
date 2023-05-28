interface Props {
  prompt: string;
}

const PromptCard = ({ prompt }: Props) => {
  return (
    <div className="mt-10">
      <h1>Prompt</h1>
      <div className="w-full mt-2 shadow-xl bg-neutral card ">
        <div className="card-body">
          <p>{prompt}</p>
          <div className="justify-start card-actions">
            <div
              className="tooltip "
              data-tip="Text Copied!"
            >
              <button className="btn">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
