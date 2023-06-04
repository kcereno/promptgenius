import React from 'react';

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }: Props) => {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        className={`join-item btn btn-primary ${
          currentPage === i ? 'btn-active' : ''
        }`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="join">{buttons}</div>;
};

export default Pagination;
