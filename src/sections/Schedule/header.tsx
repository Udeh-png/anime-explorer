"use client";

import { Days } from "@/components/schedule/days";
import { FilterDropDown } from "@/components/schedule/filterDropdown";
import { createQueryString } from "@/utils/sharedUtils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCalendar, FaFilter } from "react-icons/fa";

export const ScheduleHeder = ({
  view,
  selectedDay,
}: {
  view: string | null;
  selectedDay: string | null;
}) => {
  const params = useSearchParams();
  const genre = params.get("genre");
  const format = params.get("format");
  const genreArray = genre ? genre.split(",") : [];
  const formatArray = format ? format.split(",") : [];
  const filterCount = genreArray.length + formatArray.length;
  const [openFilters, setOpenFilters] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dropdownContainer = dropdownContainerRef.current;
    document.addEventListener("click", (e) => {
      if (dropdownContainer) {
        if (!dropdownContainer.contains(e.target as Element)) {
          setOpenFilters(false);
        }
      }
    });
  }, []);

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
            <Link
              href={`schedule?${createQueryString(params, "view", "week")}`}
              className={`w-full h-full rounded-[inherit] flex items-center justify-center transition-colors cursor-pointer ${
                view === "week" ? "bg-accent-two" : ""
              }`}
            >
              Week
            </Link>
            <Link
              href={`schedule?${createQueryString(params, "view", "day")}`}
              className={`w-full h-full rounded-[inherit] flex items-center justify-center transition-colors cursor-pointer ${
                view === "day" ? "bg-accent-two" : ""
              }`}
            >
              Day
            </Link>
          </div>

          <div className="relative" ref={dropdownContainerRef}>
            <button
              className="flex relative items-center gap-2 bg-card-background w-30 rounded-lg justify-center h-full cursor-pointer"
              onClick={() => setOpenFilters(!openFilters)}
            >
              {filterCount > 0 && (
                <span className="absolute w-4 h-4 top-0 -right-1 bg-accent-two text-xs rounded-full font-bold">
                  {filterCount}
                </span>
              )}
              <span>
                <FaFilter />
              </span>
              <span>Filter</span>
            </button>
            <AnimatePresence>
              {openFilters && (
                <motion.div
                  transition={{
                    type: "tween",
                    duration: 0.03,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <FilterDropDown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Days view={view} selectedDay={selectedDay} />
    </div>
  );
};
