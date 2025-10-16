import { AiringSchedule } from "@/types";
import { normalizeTime } from "@/utils/schedulesPageUtils";
import { formatTitle, timeConverter } from "@/utils/sharedUtils";
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";

export const WeekViewCard = ({
  dayOfWeek,
  showCount,
  isSelectedDate,
  animeOne,
  animeTwo,
}: {
  dayOfWeek?: string;
  showCount?: number;
  isSelectedDate?: boolean;
  animeOne?: AiringSchedule;
  animeTwo?: AiringSchedule;
}) => {
  const animeOneAiringTime = normalizeTime(
    new Date(timeConverter(animeOne!.airingAt, "secsToMillis")),
    {
      hrsCycle: "h23",
      secs: false,
    }
  );
  const animeTwoAiringTime = normalizeTime(
    new Date(timeConverter(animeTwo!.airingAt, "secsToMillis")),
    {
      hrsCycle: "h23",
      secs: false,
    }
  );

  const animeOneMedia = animeOne?.media;
  const animeOneImage = animeOneMedia?.coverImage.large;
  const animeOneId = animeOne?.mediaId;
  const animeOneTitle =
    animeOneMedia?.title.english || animeOneMedia?.title.romaji;

  const animeTwoMedia = animeTwo?.media;
  const animeTwoImage = animeTwoMedia?.coverImage.large;
  const animeTwoId = animeTwo?.mediaId;
  const animeTwoTitle =
    animeTwoMedia?.title.english || animeTwoMedia?.title.romaji;

  return (
    <div
      className={`bg-gray-900 px-3 py-4 rounded-xl border-2 border-transparent transition-colors ${
        isSelectedDate ? "border-2 border-accent-two!" : ""
      }`}
    >
      <div className="flex justify-between items-center font-bold mb-5">
        <p className="">{dayOfWeek}</p>
        <p className="text-xs text-white/60">{showCount} Shows</p>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href={`${animeOneId}/${formatTitle(animeOneTitle!)}`}
          className="h-20 p-2 bg-card-background rounded-lg flex gap-x-3"
        >
          <div className="relative overflow-clip rounded flex-1">
            <Image
              src={animeOneImage!}
              alt={animeOneTitle! + "Image"}
              fill
              sizes=""
              className="object-cover"
            ></Image>
          </div>
          <div className="flex-[4.5]">
            <p className="text-xs font-bold line-clamp-1 mb-1">
              {animeOneTitle}
            </p>
            <div className="text-[11px] text-white/60 font-semibold">
              <p className="mb-0.5">Ep {animeOne?.episode}</p>
              <div className="flex gap-x-1 items-center">
                <FaClock />
                <p>{animeOneAiringTime}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={`${animeTwoId}/${formatTitle(animeTwoTitle!)}`}
          className="h-20 p-2 bg-card-background rounded-lg flex gap-x-3"
        >
          <div className="relative overflow-clip rounded flex-1">
            <Image
              src={animeTwoImage!}
              alt={animeTwoTitle! + "Image"}
              fill
              sizes=""
              className="object-cover"
            ></Image>
          </div>
          <div className="flex-[4.5]">
            <p className="text-xs font-bold line-clamp-1 mb-1">
              {animeTwoTitle}
            </p>
            <div className="text-[11px] text-white/60 font-semibold">
              <p className="mb-0.5">Ep {animeTwo?.episode}</p>
              <div className="flex gap-x-1 items-center">
                <FaClock />
                <p>{animeTwoAiringTime}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
