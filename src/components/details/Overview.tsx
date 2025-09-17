"use client";

import { Media } from "@/types";
import { useEffect, useRef } from "react";

export const Overview = ({ media }: { media: Media }) => {
  const { description, genres } = media;
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionContainer = descriptionRef.current;
      descriptionContainer.innerHTML = description;
    }
  }, []);
  return (
    <div className="">
      <p className="min-[600px]:text-2xl text-base font-semibold mb-4">
        Synopsis
      </p>

      <p
        ref={descriptionRef}
        className="mb-5 min-[600px]:text-sm text-[10px]"
      ></p>

      <div>
        <p className="font-semibold min-[600px]:text-lg text-sm mb-2">Genres</p>

        <div className="flex gap-x-2">
          {genres.map((genre, i) => (
            <span
              className="px-3 bg-white/20 py-1 rounded-full min-[600px]:text-sm text-[10px]"
              key={i}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
