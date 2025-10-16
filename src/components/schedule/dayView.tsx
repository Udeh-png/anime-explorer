import { FaClock } from "react-icons/fa6";
import { DayViewCard } from "./dayViewCard";
import { getSchedules } from "@/queries";
import { getWeekDay } from "@/utils/schedulesPageUtils";
import { getOrdinal } from "@/utils/sharedUtils";

export const DayView = async ({
  selectedDay,
}: {
  selectedDay: string | null;
}) => {
  const selectedDateObj = new Date(Number(selectedDay));
  const selectedDateSchedules = await getSchedules(selectedDateObj);

  return (
    <div>
      <div className="flex items-center gap-x-2 text-2xl mb-6">
        <FaClock className="text-accent-two" />
        <p className="font-bold">
          {getWeekDay(selectedDateObj, "long")}{" "}
          {getOrdinal(selectedDateObj.getDate())}&#39;s Schedule
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        {selectedDateSchedules.map((selectedDateSchedule, i) => (
          <DayViewCard key={i} />
        ))}
      </div>
    </div>
  );
};
