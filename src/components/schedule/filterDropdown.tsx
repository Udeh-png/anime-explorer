"use client";

import { useState } from "react";
import { Checkbox } from "../shared/Checkbox";
import { SchedulePageFilter } from "@/types";
import { createQueryString } from "@/utils/sharedUtils";
import { useSearchParams } from "next/navigation";
import { GenreButton } from "./genreButton";

export const FilterDropDown = () => {
  const params = useSearchParams();

  const [filter, setFilter] = useState<SchedulePageFilter>({
    genre: [],
    format: [],
    lists: [],
  });

  const [checkBoxesState, setCheckBoxStates] = useState({
    solCheckBoxChecked: false,
    romanceCheckboxChecked: false,
    actionCheckboxChecked: false,
    comedyCheckboxChecked: false,
    dramaCheckBoxCheck: false,
    adventureCheckboxChecked: false,
  });

  function setGenre(genreName: string, clicked: boolean) {
    if (clicked) {
      setFilter((prev) => {
        if (!prev.genre.includes(genreName)) {
          return { ...prev, genre: [...prev.genre, genreName] };
        }
        return prev;
      });
    } else {
      setFilter((prev) => {
        return {
          ...prev,
          genre: prev.genre.filter((e) => e !== genreName),
        };
      });
    }
  }

  const setFilterUrl = () => {
    createQueryString(params, "", "");
  };
  return (
    <div className="text-[13px] absolute w-70 min-h-100 top-full right-0 mt-2 flex flex-col gap-y-4 rounded-lg p-3 bg-card-background backdrop-blur-xs caret-transparent z-10">
      <div>
        <p>Genre</p>
        <div className="flex mt-1.5 flex-wrap gap-2">
          <GenreButton
            id="solCheckBox"
            title="Slice Of Life"
            checked={checkBoxesState.solCheckBoxChecked}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = { ...prev, solCheckBoxChecked: e.target.checked };
                setGenre("slice of life", val.solCheckBoxChecked);
                return val;
              });
            }}
          />
          <GenreButton
            id="romanceCheckBox"
            title="Romance"
            checked={checkBoxesState.romanceCheckboxChecked}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = {
                  ...prev,
                  romanceCheckboxChecked: e.target.checked,
                };
                setGenre("romance", val.romanceCheckboxChecked);
                return val;
              });
            }}
          />
          <GenreButton
            id="comedyCheckBox"
            title="Comedy"
            checked={checkBoxesState.comedyCheckboxChecked}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = {
                  ...prev,
                  comedyCheckboxChecked: e.target.checked,
                };
                setGenre("comedy", val.comedyCheckboxChecked);
                return val;
              });
            }}
          />
          <GenreButton
            id="actionCheckBox"
            title="Action"
            checked={checkBoxesState.actionCheckboxChecked}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = {
                  ...prev,
                  actionCheckboxChecked: e.target.checked,
                };
                setGenre("action", val.actionCheckboxChecked);
                return val;
              });
            }}
          />
          <GenreButton
            id="dramaCheckBox"
            title="Drama"
            checked={checkBoxesState.dramaCheckBoxCheck}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = { ...prev, dramaCheckBoxCheck: e.target.checked };
                setGenre("drama", val.dramaCheckBoxCheck);
                return val;
              });
            }}
          />
          <GenreButton
            id="adventureCheckBox"
            title="Adventure"
            checked={checkBoxesState.adventureCheckboxChecked}
            onChange={(e) => {
              setCheckBoxStates((prev) => {
                const val = {
                  ...prev,
                  adventureCheckboxChecked: e.target.checked,
                };
                setGenre("adventure", val.adventureCheckboxChecked);
                return val;
              });
            }}
          />
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
        <button
          className="w-full h-full bg-card-background-two rounded-lg cursor-pointer"
          onClick={() => {
            setFilter({ format: [], genre: [], lists: [] });
            setCheckBoxStates({
              solCheckBoxChecked: false,
              romanceCheckboxChecked: false,
              adventureCheckboxChecked: false,
              comedyCheckboxChecked: false,
              dramaCheckBoxCheck: false,
              actionCheckboxChecked: false,
            });
          }}
        >
          Clear All
        </button>
        <button className="w-full h-full rounded-lg bg-accent-two cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};
