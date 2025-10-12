import { getSchedules } from "@/queries";
import { ScheduleHeder } from "@/sections/Schedule/header";

export default async function Schedule() {
  const firstOfTheMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const firstOfTheMonthSchedule = await getSchedules(firstOfTheMonth);
  console.log(firstOfTheMonthSchedule);

  return (
    <div>
      <div>
        <ScheduleHeder />
      </div>
    </div>
  );
}
