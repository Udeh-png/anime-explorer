"use client";

import { Days } from "@/components/schedule/days";
import { FilterDropDown } from "@/components/schedule/filterDropdown";
import { Checkbox } from "@/components/shared/Checkbox";
import { useState } from "react";
import { FaCalendar, FaFilter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export const ScheduleHeder = () => {
  const [view, setView] = useState<"week" | "day">("week");

  function handleWeekView() {
    setView("week");
  }

  function handleDayView() {
    setView("day");
  }
  return (
    <div className="px-3 h-65 bg-gray-900 pb-5 flex flex-col justify-end">
      <div className="flex h-20 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="">
            <FaCalendar className="text-3xl text-accent-two" />
          </div>
          <div className="">
            <p className="text-3xl font-semibold">Airing Schedule</p>
            <p className="text-sm text-white/50">
              Watch your favorite anime as they air
            </p>
          </div>
        </div>
        <div className="flex gap-x-3 h-12">
          <div className="bg-card-background flex items-center justify-center w-41 p-1 rounded-lg">
            <button
              className={`w-full h-full rounded-[inherit] transition-colors cursor-pointer ${
                view === "week" ? "bg-accent-two" : ""
              }`}
              onClick={handleWeekView}
            >
              Week
            </button>
            <button
              className={`w-full h-full rounded-[inherit] transition-colors cursor-pointer ${
                view === "day" ? "bg-accent-two" : ""
              }`}
              onClick={handleDayView}
            >
              Day
            </button>
          </div>

          <div className="flex relative items-center gap-2 bg-card-background w-30 justify-center rounded-lg">
            <FilterDropDown />
            <span>
              <FaFilter />
            </span>
            <span>Filter</span>
          </div>
        </div>
      </div>

      <Days view={view} />
    </div>
  );
};
