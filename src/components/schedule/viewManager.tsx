"use client";

import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { useContext } from "react";
import { WeekView } from "./weekView";
import { DayView } from "./dayView";

export const ViewManager = () => {
  const { view, selectedDay } = useContext(ScheduleContext);
  return (
    <div>
      {view === "week" ? <WeekView selectedDay={selectedDay} /> : <DayView />}
    </div>
  );
};

// Create the day view panel; Created view manager to handle switching between panels in a client comp; Passed selectedDay context as prop to WeekView comp to allow it run server-side
