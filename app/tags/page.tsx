import ComboCard from '@/components/ComboCard';
import React from 'react';
import { getUniqueTags } from '../../lib/prompts';
import { prompts } from '@/data';

const TagsPage = () => {
  const tags = getUniqueTags(prompts);

  return (
    <div className="mx-5 mt-10">
      <div className="">
        <h1>Tags:</h1>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <div
              key={tag}
              className="badge badge-outline"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="divider">Cards</div>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <ComboCard
            key={prompt.prompt}
            prompt={prompt.prompt}
            note={prompt.note}
            tags={prompt.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
