import { useContext, useEffect, useRef } from "react";
import { Day } from "./day";
import { ScheduleContext } from "@/utils/contexts/SchedulesContexts";
import { getWeekDay, getWholeDate } from "@/utils/schedulesPageUtils";

export const Days = ({ view }: { view: "week" | "day" }) => {
  const constDate = new Date();
  const date = new Date(constDate.getFullYear(), constDate.getMonth(), 1);
  const days: Date[] = [];
  const selectedDayUiRef = useRef<HTMLDivElement>(null);
  const { selectedDay, setSelectedDay } = useContext(ScheduleContext);

  if (view === "day") {
    while (date.getMonth() === constDate.getMonth()) {
      const newDate = new Date(date.toISOString());
      date.setDate(date.getDate() + 1);
      days.push(newDate);
    }
  } else {
    const date = new Date();
    date.setDate(new Date().getDate() - new Date().getDay());
    for (let i = 0; i < 7; i++) {
      const newDate = new Date();

      newDate.setDate(date.getDate() + i);
      days.push(newDate);
    }
  }

  useEffect(() => {
    const selectedDayUi = selectedDayUiRef.current;
    if (selectedDayUi) {
      selectedDayUi.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [view]);

  return (
    <div className="flex gap-3 h-25 overflow-auto scrollable items-center">
      {days.map((day, i) => {
        const todayDate = getWholeDate(new Date());
        const dayDate = getWholeDate(day);
        const isToday = dayDate === todayDate;
        const dayName = getWeekDay(day, "short");
        const dateNum = day.getDate();

        return (
          <Day
            weekDay={dayName}
            date={dateNum}
            numberOfShows={i + 2}
            isToday={isToday}
            key={i}
            ref={selectedDay === dayDate ? selectedDayUiRef : null}
            isSelectedDay={selectedDay === dayDate}
            onClick={() => {
              setSelectedDay(dayDate);
            }}
          />
        );
      })}
    </div>
  );
};
