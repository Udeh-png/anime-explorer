import { AiringSchedule } from "@/types";
import { formatDuration, normalizeTime } from "@/utils/schedulesPageUtils";
import { timeConverter } from "@/utils/sharedUtils";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaClock, FaBell } from "react-icons/fa6";

export const DayViewCard = ({
  daySchedule,
}: {
  daySchedule: AiringSchedule;
}) => {
  const selectedDayMedia = daySchedule.media;
  const selectedDayMediaAiringTimeMillis = timeConverter(
    daySchedule.airingAt,
    "secsToMillis"
  );
  const selectedDayDate = new Date(selectedDayMediaAiringTimeMillis);
  const isAvailableNow = Date.now() >= selectedDayDate.getTime();
  const timeLeft = selectedDayDate.getTime() - Date.now();
  const timeLeftString = formatDuration(timeLeft);
  const selectedDayMediaEpisode = daySchedule.episode;
  const selectedDayMediaAiringTime = normalizeTime(
    selectedDayMediaAiringTimeMillis,
    {
      hrsCycle: "h23",
      secs: false,
    }
  );
  const { title, coverImage } = selectedDayMedia;
  const animeTitle = title.english || title.romaji;

  return (
    <div className="flex bg-gray-900 h-40 gap-3 rounded-lg p-4">
      <Link
        href={`${daySchedule.mediaId}/${animeTitle}`}
        className="flex-1 relative overflow-clip rounded-lg"
      >
        <Image
          src={coverImage.large}
          alt={animeTitle + "Image"}
          fill
          sizes=""
          className="object-cover"
        />
      </Link>
      <div className="flex-10 font-noto-sans flex flex-col justify-between pb-2">
        <div>
          <Link
            href={`${daySchedule.mediaId}/${animeTitle}`}
            className="font-semibold mb-2 block w-fit"
          >
            {animeTitle}
          </Link>

          <div className="flex items-center gap-x-4 text-sm text-white/60">
            <p className="flex items-center gap-x-[3px]">
              <span>
                <FaPlay className="text-base" />
              </span>
              <span>Episode {selectedDayMediaEpisode}</span>
            </p>
            <p className="flex items-center gap-x-[3px]">
              <span>
                <FaClock />
              </span>
              <span>{selectedDayMediaAiringTime}</span>
            </p>
          </div>
        </div>
        <p
          className={`px-3 py-[3px] rounded-full w-fit text-sm font-semibold ${
            isAvailableNow
              ? "bg-green-500/30 text-green-500"
              : "bg-accent-two/30 text-accent-two"
          }`}
        >
          {isAvailableNow ? "Available Now" : `In ${timeLeftString}`}
        </p>
      </div>
      <div className="flex-2 flex items-end justify-end gap-x-3">
        <div className="w-[82%] h-10 flex gap-2">
          <div className="bg-gray-700 rounded-lg text-xl flex-1 flex items-center justify-center">
            <FaBell />
          </div>
          <Link
            href={""}
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
