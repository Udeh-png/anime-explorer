"use client";

import { Characters } from "@/components/details/Characters";
import { Overview } from "@/components/details/Overview";
import { Related } from "@/components/details/Related";
import { Media } from "@/types";
import { useState } from "react";

export const TabInterface = ({ media }: { media: Media }) => {
  const [currentTab, setCurrentTab] = useState("overview");
  return (
    <div className="">
      <div className="flex items-center border-b border-white/40 min-[600px]:text-base text-xs gap-x-1">
        <button
          className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
            currentTab === "overview" && "nav-link text-accent-two!"
          }`}
          onClick={() => {
            setCurrentTab("overview");
          }}
        >
          Overview
        </button>
        <button
          className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
            currentTab === "chars" && "nav-link text-accent-two!"
          }`}
          onClick={() => {
            setCurrentTab("chars");
          }}
        >
          Characters
        </button>
        <button
          className={`relative min-[600px]:px-4 px-2 min-[600px]:h-10 h-7 text-white/80 font-light ${
            currentTab === "related" && "nav-link text-accent-two!"
          }`}
          onClick={() => {
            setCurrentTab("related");
          }}
        >
          Related
        </button>
      </div>

      <div className="py-4">
        {currentTab === "overview" ? (
          <Overview media={media} />
        ) : currentTab === "chars" ? (
          <Characters media={media} />
        ) : (
          <Related media={media} />
        )}
      </div>
    </div>
  );
};
