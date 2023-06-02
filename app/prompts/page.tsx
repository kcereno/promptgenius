'use client';
import ComboCard from '@/components/ComboCard';
import React, { useEffect, useState } from 'react';
import { getUniqueTags } from '../../lib/prompts';
import { prompts } from '@/data';
import { PromptI } from '@/models/interfaces';
import Pagination from '@/ui/Pagination';

const AllPromptsPage = () => {
  const tags = getUniqueTags(prompts).sort((a, b) => a.localeCompare(b));

  const [activeTags, setActiveTags] = useState<string[]>(tags);
  const [filteredPrompts, setFilteredPrompts] = useState<PromptI[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const getFilteredPrompts = prompts.filter((prompt) =>
      prompt.tags.some((tag) => activeTags.includes(tag))
    );

    const totalPages = Math.ceil(getFilteredPrompts.length / 4);
    setTotalPages(totalPages);

    const shownPrompts = getFilteredPrompts.slice(
      (currentPage - 1) * 4,
      currentPage * 4
    );

    setFilteredPrompts(shownPrompts);
  }, [activeTags, currentPage]);

  const handleTagClick = (tag: string) => {
    let updatedActiveTags;

    if (isActiveTag(tag)) {
      updatedActiveTags = activeTags.filter((t) => t !== tag);
    } else {
      updatedActiveTags = [...activeTags, tag];
    }

    setActiveTags(updatedActiveTags);
    setCurrentPage(1);
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
      <div>
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
        <div className="flex flex-wrap gap-2 mt-5">
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
      <div className="my-10 divider"></div>

      <div className="flex flex-wrap gap-5">
        {filteredPrompts.map((prompt) => (
          <ComboCard
            key={prompt.id}
            prompt={prompt}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center my-10">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default AllPromptsPage;
