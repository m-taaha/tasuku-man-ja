import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tasks..."
        className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <svg
        className="absolute left-3 top-3 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
