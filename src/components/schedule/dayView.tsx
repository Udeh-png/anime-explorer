import { FaClock } from "react-icons/fa6";
import { DayViewCard } from "./dayViewCard";
import { getSchedules } from "@/queries";
import { getMonth, getWeekDay } from "@/utils/schedulesPageUtils";
import { getOrdinal } from "@/utils/sharedUtils";

export const DayView = async ({
  selectedDay,
}: {
  selectedDay: string | null;
}) => {
  const selectedDayDate = new Date(Number(selectedDay));
  const selectedDaySchedules = await getSchedules(selectedDayDate);

  return (
    <div>
      <div className="flex items-center gap-x-2 text-2xl mb-6">
        <FaClock className="text-accent-two" />
        <p className="font-bold">
          {getWeekDay(selectedDayDate, "long")},{" "}
          {getMonth(selectedDayDate, "long")}{" "}
          {getOrdinal(selectedDayDate.getDate())} Schedule
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        {selectedDaySchedules.map((daySchedule, i) => (
          <DayViewCard daySchedule={daySchedule} key={i} />
        ))}
      </div>
    </div>
  );
};
