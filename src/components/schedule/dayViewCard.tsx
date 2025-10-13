import Link from "next/link";
import { FaPlay, FaClock, FaBell } from "react-icons/fa6";

export const DayViewCard = () => {
  return (
    <div className="flex bg-gray-900 h-40 gap-3 rounded-lg p-4">
      <div className="flex-1 border rounded-lg"></div>
      <div className="flex-10 font-noto-sans flex flex-col justify-between pb-2">
        <div>
          <p className="font-semibold mb-2">Frieren: Beyond Journey's End</p>

          <div className="flex items-center gap-x-4 text-sm text-white/60">
            <p className="flex items-center gap-x-[3px]">
              <span>
                <FaPlay className="text-base" />
              </span>
              <span>Episode 15</span>
            </p>
            <p className="flex items-center gap-x-[3px]">
              <span>
                <FaClock />
              </span>
              <span>23:00</span>
            </p>
          </div>
        </div>
        <p className="px-3 py-[3px] bg-accent-two/30 rounded-full w-fit text-sm text-accent-two font-semibold">
          In 2h 30m
        </p>
      </div>
      <div className="flex-2 flex items-end justify-end gap-x-3">
        <div className="w-[82%] h-10 flex gap-2">
          <div className="bg-gray-700 rounded-lg text-xl flex-1 flex items-center justify-center">
            <FaBell />
          </div>
          <Link
            href={"/"}
            className="flex items-center gap-x-2 justify-center bg-accent-two rounded-lg flex-3"
          >
            <FaPlay className="text-xl" />
            <span className="text-sm">Watch</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
