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
    console.log('handlePromptSelect ~ selectedPrompt:', selectedPrompt);
    const foundPrompt = getPrompt(selectedPrompt);
    setPrompt(foundPrompt!);
  };

  return (
    <>
      {/* Input */}
      <div className="mx-5 lg:w-[1100px] lg:mx-auto mt-10 gap-20 flex-1">
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

          <div className="flex justify-center">
            <Link href="/tags">
              <button className="mt-10 text-center btn-secondary btn">
                View By Tags
              </button>
            </Link>
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
