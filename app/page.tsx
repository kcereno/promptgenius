'use client';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import NotesCard from '@/components/NotesCard';
import PromptCard from '@/components/PromptCard';
import { prompts } from '@/data';
import { getPrompt } from '@/lib/prompts';
import { PromptI } from '@/models/interfaces';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState<PromptI | null>(null);
  const [darkMode, setDarkMose] = useState(true);

  let theme = 'night';

  if (!darkMode) {
    theme = 'light';
  }

  const handlePromptSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrompt = e.target.value;
    const foundPrompt = getPrompt(selectedPrompt);
    setPrompt(foundPrompt!);
  };

  const changeTheme = () => {
    setDarkMose(!darkMode);
  };

  return (
    <>
      {/* Input */}
      <div className="mx-5 lg:w-[1200px] lg:mx-auto lg:flex mt-10 gap-20 flex-1">
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
                  key={prompt.prompt}
                  value={prompt.prompt}
                >
                  {prompt.prompt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button className="mt-10 text-center btn-secondary btn">
              View By Tags
            </button>
          </div>
        </div>

        {/* Answers */}

        <div className="flex-1 w-full mt-10 lg:mt-0">
          {prompt?.prompt && (
            <PromptCard
              prompt={prompt.prompt}
              tags={prompt.tags}
            />
          )}
          {prompt?.note && <NotesCard note={prompt.note} />}
        </div>
      </div>
    </>
  );
}
