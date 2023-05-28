'use client';
import PromptCard from '@/components/PromptCard';
import { prompts } from '@/data';
import { getPrompt } from '@/lib/prompts';
import { PromptI } from '@/models/interfaces';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState<PromptI | null>(null);
  const [copyButtonClicked, setCopyButtonClicked] = useState(false);

  const handlePromptSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrompt = e.target.value;
    const foundPrompt = getPrompt(selectedPrompt);
    setPrompt(foundPrompt!);
  };

  return (
    <main className="flex-grow mx-5">
      <div className="mt-10">
        <h1>
          Prompt
          <span className="text-primary">Genius</span>
        </h1>
        <p className="mt-2">
          Find the right prompts for AI engines you need without digging the
          through the web
        </p>
      </div>
      <div className="mt-10">
        <p className="font-bold text-primary">I want to:</p>
        <select
          className="w-full max-w-xs mt-4 select select-bordered"
          onChange={handlePromptSelect}
        >
          <option defaultChecked>...</option>
          {prompts.map((prompt) => (
            <option
              key={prompt.prompt}
              value={prompt.prompt}
            >
              {prompt.prompt}
            </option>
          ))}
        </select>
      </div>

      {prompt && (
        <>
          <PromptCard prompt={prompt.prompt} />
          {prompt.note && (
            <div className="mt-10">
              <h1>Note</h1>
              <div className="w-full mt-2 shadow-xl bg-neutral card ">
                <div className="card-body">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <button
        className="mt-4 btn"
        onClick={() => {
          navigator.clipboard.writeText(prompt!.prompt);
        }}
      >
        test
      </button>
    </main>
  );
}
