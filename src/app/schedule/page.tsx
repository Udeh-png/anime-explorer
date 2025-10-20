import { weekDays } from "@/components/schedule/data/WeekAndMonth";
import { DayView } from "@/components/schedule/dayView";
import { WeekView } from "@/components/schedule/weekView";
import { getSchedules } from "@/queries";
import { ScheduleHeder } from "@/sections/Schedule/header";
import { AiringSchedule } from "@/types";
import { ScheduleContextProvider } from "@/utils/contexts/SchedulesContexts";

export default async function Schedule({
  searchParams,
}: {
  searchParams: Promise<{
    view: "day" | "week";
    selectedDay: string;
    genre: string;
    format: string;
  }>;
}) {
  const requestArray: Promise<AiringSchedule[]>[] = [];
  weekDays.forEach((weekDay) => {
    requestArray.push(getSchedules(weekDay));
  });

  const params = await searchParams;
  const view = params.view || "week";
  const selectedDay = params.selectedDay || String(Date.now());
  const format = params.format;
  const genre = params.genre;
  const weeksAiringSchedules = await Promise.all(requestArray);
  const formatArray = format ? format.split(",") : [];
  const genreArray = genre ? genre.split(",") : [];

  return (
    <ScheduleContextProvider>
      <div>
        <ScheduleHeder view={view} selectedDay={selectedDay} />

        <div className="py-7 px-10 bg-gray-950 h-full">
          <div>
            {view === "day" ? (
              <DayView
                selectedDay={selectedDay}
                formats={formatArray}
                genres={genreArray}
              />
            ) : (
              <WeekView
                weeksAiringSchedules={weeksAiringSchedules}
                selectedDay={selectedDay}
              />
            )}
          </div>
        </div>
      </div>
    </ScheduleContextProvider>
  );
}
