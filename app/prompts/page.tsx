'use client';
import ComboCard from '@/components/ComboCard';
import React, { useEffect, useState } from 'react';
import { getUniqueTags } from '../../lib/prompts';
import { prompts } from '@/data';
import { PromptI } from '@/models/interfaces';

const TagsPage = () => {
  const tags = getUniqueTags(prompts).sort((a, b) => a.localeCompare(b));

  const [activeTags, setActiveTags] = useState<string[]>(tags);
  const [filteredPrompts, setFilteredPrompts] = useState<PromptI[]>([]);

  useEffect(() => {
    const getFilteredPrompts = prompts.filter((prompt) =>
      prompt.tags.some((tag) => activeTags.includes(tag))
    );

    setFilteredPrompts(getFilteredPrompts);
  }, [activeTags]);

  const handleTagClick = (tag: string) => {
    let updatedActiveTags;

    if (isActiveTag(tag)) {
      updatedActiveTags = activeTags.filter((t) => t !== tag);
    } else {
      updatedActiveTags = [...activeTags, tag];
    }

    setActiveTags(updatedActiveTags);
  };

  const handleAllButtonClick = () => {
    setActiveTags(tags);
  };

  const handleNoneButtonClick = () => {
    setActiveTags([]);
  };
  const isActiveTag = (tag: string) => activeTags.includes(tag);

  return (
    <div className="mx-5 mt-10 ">
      <div className="">
        <div className="flex content-center justify-between gap-4 ">
          <h1>Tags:</h1>
          <div className="flex gap-2 ">
            <button
              className={`btn btn-sm ${
                activeTags.length === tags.length
                  ? 'btn-primary'
                  : 'btn-outline btn-primary'
              }`}
              onClick={handleAllButtonClick}
            >
              All
            </button>
            <button
              className={`btn btn-sm ${
                activeTags.length === 0
                  ? 'btn-primary'
                  : 'btn-outline btn-primary'
              }`}
              onClick={handleNoneButtonClick}
            >
              None
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`badge hover:cursor-pointer ${
                isActiveTag(tag)
                  ? 'badge-primary'
                  : 'badge-outline badge-primary'
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 divider">Cards</div>
      <div className="flex flex-wrap gap-5">
        {filteredPrompts.map((prompt) => (
          <ComboCard
            key={prompt.id}
            prompt={prompt}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
