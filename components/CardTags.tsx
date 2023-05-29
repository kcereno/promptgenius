import React from 'react';

interface Props {
  tags: string[];
}

const CardTags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap justify-end gap-2 mt-4">
      {tags.map((tag) => (
        <div
          className="badge badge-outline"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default CardTags;
