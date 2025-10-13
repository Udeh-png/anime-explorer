import { WeekView } from "@/components/schedule/weekView";
import { ScheduleHeder } from "@/sections/Schedule/header";
import { ScheduleContextProvider } from "@/utils/contexts/SchedulesContexts";

export default async function Schedule() {
  const firstOfTheMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  // const firstOfTheMonthSchedule = await getSchedules(firstOfTheMonth);
  // console.log(firstOfTheMonthSchedule);

  return (
    <ScheduleContextProvider>
      <div>
        <div>
          <ScheduleHeder />
        </div>

        <div className="py-7 px-10 bg-gray-950 h-full">
          <WeekView />
        </div>
      </div>
    </ScheduleContextProvider>
  );
}
