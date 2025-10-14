import { useContext, useEffect, useRef, useState } from "react";
import { Day } from "./day";
import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { getWeekDay, getWholeDate } from "@/utils/schedulesPageUtils";
import { monthDays, weekDays } from "./data/WeekAndMonth";

export const Days = ({ view }: { view: "week" | "day" }) => {
  const selectedDateUiRef = useRef<HTMLDivElement>(null);
  const { selectedDate, setSelectedDate } = useContext(ScheduleContext);
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    if (view === "week") {
      setDays(weekDays);
    } else {
      setDays(monthDays);
    }
  }, [view]);

  useEffect(() => {
    if (selectedDateUiRef.current) {
      selectedDateUiRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [days]);

  return (
    <div className="flex gap-3 h-25 overflow-auto scrollable items-center">
      {days.map((day, i) => {
        const todayDate = getWholeDate(new Date());
        const dayDate = getWholeDate(day);
        const isToday = dayDate === todayDate;
        const dayName = getWeekDay(day, "short");
        const dateNum = day.getDate();
        const isSelectedDate = selectedDate === dayDate;

        return (
          <Day
            weekDay={dayName}
            date={dateNum}
            numberOfShows={i + 2}
            isToday={isToday}
            key={i}
            ref={isSelectedDate ? selectedDateUiRef : null}
            isSelectedDate={isSelectedDate}
            onClick={() => {
              setSelectedDate(dayDate);
            }}
          />
        );
      })}
    </div>
  );
};
