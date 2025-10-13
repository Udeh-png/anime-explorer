import { AiringSchedule } from "@/types";
import { FaClock } from "react-icons/fa6";

export const WeekViewCard = ({
  dayOfWeek,
  showCount,
  isSelectedDay,
  scheduleOne,
  scheduleTwo,
}: {
  dayOfWeek?: string;
  showCount?: number;
  isSelectedDay?: boolean;
  scheduleOne?: AiringSchedule;
  scheduleTwo?: AiringSchedule;
}) => {
  return (
    <div
      className={`bg-gray-900 px-3 py-4 rounded-xl border-2 border-transparent transition-colors ${
        isSelectedDay ? "border-2 border-accent-two!" : ""
      }`}
    >
      <div className="flex justify-between items-center font-bold mb-5">
        <p className="">{dayOfWeek}</p>
        <p className="text-xs text-white/60">{showCount} Shows</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="h-20 p-2 bg-card-background rounded-lg flex gap-x-3">
          <div className="border rounded flex-1"></div>
          <div className="flex-[4.5]">
            <p className="text-xs font-bold line-clamp-1 mb-1">
              Frieren: Beyond Journey's End
            </p>
            <div className="text-[11px] text-white/60 font-semibold">
              <p className="mb-0.5">Ep 15</p>
              <div className="flex gap-x-1 items-center">
                <FaClock />
                <p>23:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 p-2 bg-card-background rounded-lg flex gap-x-3">
          <div className="border rounded flex-1"></div>
          <div className="flex-[4.5]">
            <p className="text-xs font-bold line-clamp-1 mb-1">
              My Hero Academia Season 8
            </p>
            <div className="text-[11px] text-white/60 font-semibold">
              <p className="mb-0.5">Ep 8</p>
              <div className="flex gap-x-1 items-center">
                <FaClock />
                <p>17:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
