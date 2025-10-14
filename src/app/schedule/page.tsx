import { weekDays } from "@/components/schedule/data/WeekAndMonth";
import { ViewManager } from "@/sections/Schedule/viewManager";
import { getSchedules } from "@/queries";
import { ScheduleHeder } from "@/sections/Schedule/header";
import { AiringSchedule } from "@/types";
import { ScheduleContextProvider } from "@/utils/contexts/SchedulesContexts";

export default async function Schedule() {
  const requestArray: Promise<AiringSchedule[]>[] = [];
  weekDays.forEach((weekDay) => {
    requestArray.push(getSchedules(weekDay));
  });

  const weeksAiringSchedules = await Promise.all(requestArray);

  return (
    <ScheduleContextProvider>
      <div>
        <div>
          <ScheduleHeder />
        </div>

        <div className="py-7 px-10 bg-gray-950 h-full">
          <ViewManager weeksAiringSchedules={weeksAiringSchedules} />
        </div>
      </div>
    </ScheduleContextProvider>
  );
}
