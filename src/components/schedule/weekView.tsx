import { AiringSchedule } from "@/types";
import { WeekViewCard } from "./weekViewCard";
import { getWeekDay, getWholeDate } from "@/utils/schedulesPageUtils";

export const WeekView = ({
  weeksAiringSchedules,
  selectedDay,
}: {
  weeksAiringSchedules: AiringSchedule[][];
  selectedDay: string | null;
}) => {
  console.log(selectedDay);

  return (
    <div className="grid grid-cols-4 gap-6">
      {weeksAiringSchedules.map((daySchedules, i) => {
        const noCornDaySchedules = daySchedules
          .filter((daySchedule) => !daySchedule.media.isAdult)
          .sort((a, b) => b.media.popularity - a.media.popularity);
        const showsCount = noCornDaySchedules.length;
        const weekDay = new Date(noCornDaySchedules[0].airingAt * 1000);
        const animeSchedule1 = noCornDaySchedules[0];
        const animeSchedule2 = noCornDaySchedules[1];
        const dayOfWeek = getWeekDay(
          new Date(noCornDaySchedules[0].airingAt * 1000),
          "long"
        );
        const weekDayDate = getWholeDate(weekDay);
        const isSelectedDate =
          weekDayDate === getWholeDate(new Date(Number(selectedDay)));

        return (
          <WeekViewCard
            dayOfWeek={dayOfWeek}
            showCount={showsCount}
            key={i}
            isSelectedDate={isSelectedDate}
            animeOne={animeSchedule1}
            animeTwo={animeSchedule2}
          />
        );
      })}
    </div>
  );
};
