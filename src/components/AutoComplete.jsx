import React, { useState } from "react";

const AutoComplete = ({ allPokemons, setDisplayedPokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const firstNames = (input) => {
    const value = input.toLowerCase();
    return value ? allPokemons.filter((e) => e.name.includes(value)) : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = searchTerm.trim();
    setDisplayedPokemons(firstNames(text));
    setSearchTerm("");
  };
  return (
    <div className="relative z-50">
      <form
        onSubmit={handleSubmit}
        className="relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-xs w-[20.5rem] h-6 px-2 py-1 bg-[hsl(214,13%,47%)] rounded-lg text-gray-300 text-center"
        />
        <button
          type="submit"
          className="text-xs bg-slate-900 text-slate-300 w-[2.5rem] h-6 px-2 py-1 rounded-r-lg text-center absolute right-0 hover:bg-slate-700"
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default AutoComplete;
