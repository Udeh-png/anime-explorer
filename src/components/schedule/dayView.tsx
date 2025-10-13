import { FaClock } from "react-icons/fa6";
import { DayViewCard } from "./dayViewCard";

export const DayView = () => {
  return (
    <div>
      <div className="flex items-center gap-x-2 text-2xl mb-6">
        <FaClock className="text-accent-two" />
        <p className="font-bold">Monday's Schedule</p>
      </div>

      <div className="flex flex-col gap-y-5">
        <DayViewCard />
        <DayViewCard />
        <DayViewCard />
        <DayViewCard />
        <DayViewCard />
      </div>
    </div>
  );
};
