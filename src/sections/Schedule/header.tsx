"use client";

import { Days } from "@/components/schedule/days";
import { FilterDropDown } from "@/components/schedule/filterDropdown";
import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { AnimatePresence, motion } from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaCalendar, FaFilter } from "react-icons/fa";

export const ScheduleHeder = () => {
  const { view, setView } = useContext(ScheduleContext);

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

  function handleWeekView() {
    setView("week");
  }

  function handleDayView() {
    setView("day");
  }
  return (
    // <ViewContextProvider>
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

          <div className="relative" ref={dropdownContainerRef}>
            <button
              className="flex items-center gap-2 bg-card-background w-30 rounded-lg justify-center h-full cursor-pointer"
              onClick={() => setOpenFilters(!openFilters)}
            >
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

      <Days view={view} />
    </div>
    // </ViewContextProvider>
  );
};
