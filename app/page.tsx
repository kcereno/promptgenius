'use client';

import NotesCard from '@/components/NotesCard';
import PromptCard from '@/components/PromptCard';
import { prompts } from '@/data';
import { getPrompt } from '@/lib/prompts';
import { PromptI } from '@/models/interfaces';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState<PromptI | null>(null);

  const handlePromptSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrompt = e.target.value;

    const foundPrompt = getPrompt(selectedPrompt);
    setPrompt(foundPrompt!);
  };

  return (
    <>
      {/* Input */}
      <div className="flex-1 gap-20 mx-5 mt-10 lg:mt-20">
        <div>
          {/* Header Text */}
          <div>
            <h1>
              Prompt
              <span className="text-primary">Genius</span>
            </h1>
            <p className="mt-2 prose ">
              Find the right prompts for AI engines you need without digging the
              through the web
            </p>
          </div>

          {/* Form */}
          <div className="mt-6">
            <p className="font-bold text-primary">I want to:</p>
            <select
              className="w-full mt-4 select select-bordered"
              onChange={handlePromptSelect}
            >
              <option defaultChecked>...</option>
              {prompts.map((prompt) => (
                <option
                  key={prompt.goal}
                  value={prompt.goal}
                >
                  {prompt.goal}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Answers */}

        {prompt?.prompt && (
          <div className="w-full mt-10 lg:mt-0">
            <div className="my-10 divider"></div>
            <PromptCard prompt={prompt.prompt} />
            {prompt?.note && (
              <NotesCard
                note={prompt.note}
                tags={prompt.tags}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
