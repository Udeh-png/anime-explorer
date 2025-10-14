"use client";

import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { useContext } from "react";
import { WeekView } from "../../components/schedule/weekView";
import { DayView } from "../../components/schedule/dayView";
import { AiringSchedule } from "@/types";

export const ViewManager = ({
  weeksAiringSchedules,
}: {
  weeksAiringSchedules: AiringSchedule[][];
}) => {
  const { view, selectedDate } = useContext(ScheduleContext);
  return (
    <div>
      {view === "week" ? (
        <WeekView
          weeksAiringSchedules={weeksAiringSchedules}
          selectedDate={selectedDate}
        />
      ) : (
        <DayView />
      )}
    </div>
  );
};
