import { FaClock } from "react-icons/fa6";
import { DayViewCard } from "./dayViewCard";
import { getSchedules } from "@/queries";
import { getMonth, getWeekDay } from "@/utils/schedulesPageUtils";
import { getOrdinal } from "@/utils/sharedUtils";

export const DayView = async ({
  selectedDay,
  formats,
  genres,
}: {
  selectedDay: string | null;
  formats: string[];
  genres: string[];
}) => {
  const selectedDayDate = new Date(Number(selectedDay));
  const selectedDaySchedules = await getSchedules(selectedDayDate);
  let filteredSchedule = selectedDaySchedules;
  if (genres.length > 0) {
    filteredSchedule = filteredSchedule.filter((m) => {
      const mediaGenres = m.media.genres.map((g) => g.toLowerCase());
      return genres.every((e) => mediaGenres.includes(e));
    });
  }
  console.log(filteredSchedule);
  if (formats.length > 0) {
    filteredSchedule = filteredSchedule.filter((m) => {
      return formats.some((e) => m.media.format.toLowerCase() === e);
    });
  }

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
        {filteredSchedule.map((daySchedule, i) => (
          <DayViewCard daySchedule={daySchedule} key={i} />
        ))}
      </div>
    </div>
  );
};
