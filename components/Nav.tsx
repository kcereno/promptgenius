import React from 'react';

const Nav = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="text-xl normal-case btn btn-ghost">PromptGenius</a>
      </div>
      {/* End */}
      {/* Mobile */}
      <div className="dropdown dropdown-end lg:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-square avatar"
        >
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </label>
        <ul
          tabIndex={0}
          className="w-32 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
        >
          <li>
            <a className="justify-between">Add</a>
          </li>
          <li>
            <a>View All</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
      {/* Desktop */}
      <div className="flex-none hidden lg:block">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Add</a>
          </li>

          <li>
            <a>View All</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
