"use client";

import { useContext } from "react";
import { WeekViewCard } from "./weekViewCard";
import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { getWeekDay, getWholeDate } from "@/utils/schedulesPageUtils";

export const WeekView = () => {
  const date = new Date();
  const weekDays: Date[] = [];
  date.setDate(new Date().getDate() - new Date().getDay());
  for (let i = 0; i < 7; i++) {
    const newDate = new Date();

    newDate.setDate(date.getDate() + i);
    weekDays.push(newDate);
  }
  const { selectedDay } = useContext(ScheduleContext);

  return (
    <div className="grid grid-cols-4 gap-6">
      {weekDays.map((weekDay, i) => {
        const dayOfWeek = getWeekDay(weekDay, "long");
        const day = getWholeDate(weekDay);
        console.log(day === selectedDay);

        return (
          <WeekViewCard
            dayOfWeek={dayOfWeek}
            showCount={3}
            key={i}
            isSelectedDay={day === selectedDay}
          />
        );
      })}
    </div>
  );
};
