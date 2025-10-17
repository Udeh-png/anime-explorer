import { useEffect, useRef, useState } from "react";
import { Day } from "./day";
import { getWholeDate } from "@/utils/schedulesPageUtils";
import { monthDays, weekDays } from "./data/WeekAndMonth";

export const Days = ({
  view,
  selectedDay,
}: {
  view: string | null;
  selectedDay: string | null;
}) => {
  const selectedDateUiRef = useRef<HTMLAnchorElement>(null);
  const selectedDate = getWholeDate(new Date(Number(selectedDay)));
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    if (view === "day") {
      setDays(monthDays);
    } else {
      setDays(weekDays);
    }
  }, [view]);

  useEffect(() => {
    if (selectedDateUiRef.current) {
      selectedDateUiRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [days]);

  return (
    <div className="flex gap-3 h-25 overflow-auto scrollable items-center">
      {days.map((day, i) => {
        const todayDate = getWholeDate(new Date());
        const dayDate = getWholeDate(day);
        const isToday = dayDate === todayDate;
        const isSelectedDate = selectedDate === dayDate;

        return (
          <Day
            date={day}
            isToday={isToday}
            key={i}
            ref={isSelectedDate ? selectedDateUiRef : null}
            isSelectedDate={isSelectedDate}
          />
        );
      })}
    </div>
  );
};
