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
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen"
    >
      {/* Nav */}
      <Nav changeTheme={changeTheme} />

      {/* Main */}
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

          <div className="flex justify-center">
            <button className="mt-10 text-center btn-secondary btn">
              View By Tags
            </button>
          </div>
        </div>

        {prompt?.prompt && (
          <PromptCard
            prompt={prompt.prompt}
            tags={prompt.tags}
          />
        )}
        {prompt?.note && <NotesCard note={prompt.note} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
