import { useEffect, useRef, useState } from "react";
import { Day } from "./day";

export const Days = ({ view }: { view: "week" | "day" }) => {
  const dateOption: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const constDate = new Date();
  const date = new Date(constDate.getFullYear(), constDate.getMonth(), 1);
  const days: Date[] = [];
  const todayUiRef = useRef<HTMLDivElement>(null);
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleDateString("en-US", dateOption)
  );

  if (view === "day") {
    while (date.getMonth() === constDate.getMonth()) {
      const newDate = new Date(date.toISOString());
      date.setDate(date.getDate() + 1);
      days.push(newDate);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      const newDate = new Date(date.toISOString());
      date.setDate(date.getDate() + 1);
      days.push(newDate);
    }
  }

  useEffect(() => {
    const todayUi = todayUiRef.current;
    if (todayUi) {
      todayUi.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [view]);

  return (
    <div className="flex gap-3 h-25 overflow-auto scrollable items-center">
      {days.map((day, i) => {
        const todayDate = new Date().toLocaleDateString("en-US", dateOption);
        const dayDate = day.toLocaleDateString("en-US", dateOption);
        const isToday = dayDate === todayDate;
        const dayName = day.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const dateNum = day.getDate();

        return (
          <Day
            weekDay={dayName}
            date={dateNum}
            numberOfShows={i + 2}
            isToday={isToday}
            key={i}
            ref={isToday ? todayUiRef : null}
            className={`${
              selectedDay === dayDate ? "bg-accent-two!" : ""
            } transition-colors`}
            onClick={() => {
              setSelectedDay(dayDate);
            }}
          />
        );
      })}
    </div>
  );
};
