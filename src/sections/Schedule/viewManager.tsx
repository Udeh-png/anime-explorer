"use client";

import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { useContext } from "react";
import { WeekView } from "../../components/schedule/weekView";
import { DayView } from "../../components/schedule/dayView";
import { AiringSchedule } from "@/types";
import { useSearchParams } from "next/navigation";

export const ViewManager = ({
  weeksAiringSchedules,
}: {
  weeksAiringSchedules: AiringSchedule[][];
}) => {
  const { selectedDate } = useContext(ScheduleContext);
  const view = useSearchParams().get("view");
  return (
    <div>
      {view === "day" ? (
        <DayView />
      ) : (
        <WeekView
          weeksAiringSchedules={weeksAiringSchedules}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
};
