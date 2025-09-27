"use client";

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar = ({
  labelText,
  actionFunction,
}: {
  labelText?: string;
  actionFunction: (formData: FormData) => void;
}) => {
  const [input, setInput] = useState("");

  return (
    <form
      className="relative border rounded-2xl overflow-hidden min-[600px]:w-full w-[85%] max-w-md min-[600px]:h-10 flex items-center"
      action={actionFunction}
    >
      <FaMagnifyingGlass className="absolute left-3 text-white/50 pointer-events-none" />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        name="search-character"
        id="search-character"
        placeholder={labelText || "Search"}
        className="w-full h-full pl-10 pr-3 outline-none bg-transparent min-[600px]:text-base text-sm"
      />
    </form>
  );
};
