"use client";

import { Media } from "@/types";
import { useState } from "react";

export const TabInterface = ({ media }: { media: Media }) => {
  const [selected, setSelected] = useState("overview");
  return (
    <div className="">
      <div>
        <div className="flex items-center border-b border-white/40 min-[600px]:text-base text-xs gap-x-1">
          <button
            className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
              selected === "overview" && "nav-link text-accent-two!"
            }`}
            onClick={() => {
              setSelected("overview");
            }}
          >
            Overview
          </button>
          <button
            className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
              selected === "chars" && "nav-link text-accent-two!"
            }`}
            onClick={() => {
              setSelected("chars");
            }}
          >
            Characters
          </button>
          <button
            className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
              selected === "related" && "nav-link text-accent-two!"
            }`}
            onClick={() => {
              setSelected("related");
            }}
          >
            Related
          </button>
        </div>
      </div>
    </div>
  );
};
