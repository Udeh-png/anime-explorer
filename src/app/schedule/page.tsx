import { ViewManager } from "@/components/schedule/viewManager";
import { getSchedules } from "@/queries";
import { ScheduleHeder } from "@/sections/Schedule/header";
import { ScheduleContextProvider } from "@/utils/contexts/SchedulesContexts";

export default async function Schedule() {
  const firstOfTheMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const firstOfTheMonthSchedule = await getSchedules(firstOfTheMonth);

  return (
    <ScheduleContextProvider>
      <div>
        <div>
          <ScheduleHeder />
        </div>

        <div className="py-7 px-10 bg-gray-950 h-full">
          <ViewManager />
        </div>
      </div>
    </ScheduleContextProvider>
  );
}
