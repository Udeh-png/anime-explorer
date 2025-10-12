"use client";

import { useState } from "react";
import { Checkbox } from "../shared/Checkbox";

export const FilterDropDown = () => {
  return (
    <div className="text-[13px] absolute w-70 min-h-100 top-full right-0 mt-2 flex flex-col gap-y-4 rounded-lg p-3 bg-card-background backdrop-blur-xs">
      <div>
        <p>Genre</p>
        <div className="flex mt-1.5 flex-wrap gap-2">
          <button
            className="px-4 py-1.5 bg-card-background rounded-lg"
            onClick={() => {}}
          >
            Action
          </button>
          <button
            className="px-4 py-1.5 bg-card-background rounded-lg"
            onClick={() => {}}
          >
            Romance
          </button>
          <button
            className="px-4 py-1.5 bg-card-background rounded-lg"
            onClick={() => {}}
          >
            Comedy
          </button>
          <button className="px-4 py-1.5 bg-card-background rounded-lg">
            Slice Of Life
          </button>
        </div>
      </div>

      <div>
        <p>Format</p>
        <div className="flex mt-1.5 flex-wrap gap-3">
          <label
            htmlFor="tv-checkbox"
            className="flex items-center gap-x-2 caret-transparent cursor-pointer"
          >
            <Checkbox round id="tv-checkbox" />
            <span>TV</span>
          </label>

          <label
            htmlFor="movie-checkbox"
            className="flex items-center gap-x-2 caret-transparent cursor-pointer"
          >
            <Checkbox round id="movie-checkbox" />
            <span>Movie</span>
          </label>

          <label
            htmlFor="ova-checkbox"
            className="flex items-center gap-x-2 caret-transparent cursor-pointer"
          >
            <Checkbox round id="ova-checkbox" />
            <span>OVA</span>
          </label>
        </div>
      </div>

      <div>
        <p>Status</p>
        <div className="mt-1.5 flex flex-col gap-y-2">
          <label
            htmlFor="airing-checkbox"
            className="flex gap-x-2 cursor-pointer"
          >
            <Checkbox id="airing-checkbox" />
            <span>Airing</span>
          </label>
          <label
            htmlFor="finished-checkbox"
            className="flex gap-x-2 cursor-pointer"
          >
            <Checkbox id="finished-checkbox" />
            <span>Finished</span>
          </label>
        </div>
      </div>

      <div>
        <p>Lists</p>
        <div className="mt-1.5 flex flex-col gap-y-2">
          <label
            htmlFor="watch-checkbox"
            className="flex gap-x-2 cursor-pointer"
          >
            <Checkbox id="watch-checkbox" />
            <span>Watch List</span>
          </label>
          <label
            htmlFor="favorite-checkbox"
            className="flex gap-x-2 cursor-pointer"
          >
            <Checkbox id="favorite-checkbox" />
            <span>Favorite</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3 w-full h-10">
        <button className="w-full h-full bg-card-background rounded-lg cursor-pointer">
          Clear All
        </button>
        <button className="w-full h-full rounded-lg bg-accent-two cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};
