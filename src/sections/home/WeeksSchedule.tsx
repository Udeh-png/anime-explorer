import { getMediaWithId } from "@/queries";
import Image from "next/image";
import { BiTrendingUp } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";

const AiringSoonCard = ({
  imageSrc,
  name,
  epNumber,
  score,
  popularity,
}: {
  imageSrc: string;
  name: string;
  epNumber: number;
  airingTime: Date;
  score: number;
  popularity: number;
}) => {
  return (
    <div className="flex-1 flex flex-col rounded-lg bg-[rgb(30,30,30)] border-2 border-white/30 h-full px-4 pt-4 pb-1">
      <div className="relative flex-3 rounded-lg overflow-clip">
        <Image src={imageSrc} alt="" fill sizes=""></Image>
        <p className="absolute top-1 left-1 text-xxs px-1.5 py-0.5 bg-accent-one font-semibold rounded">
          EP {epNumber}
        </p>
      </div>

      <div className="flex-1 flex flex-col font-semibold">
        <p className="line-clamp-1">{name}</p>
        <div className="mb-1 flex text-xs items-center font-semibold justify-center text-green-500 bg-white/20 rounded py-0.5">
          <GoClockFill />
          <p>In 2h 15m</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-end gap-x-0.5">
            <TiStarFullOutline className="text-yellow-500" />
            <p className="text-xs">{score}</p>
          </div>

          <div className="flex items-center gap-x-0.5 font-normal text-white/70">
            <BiTrendingUp className="text-green-500" />
            <p className="text-xs">{popularity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvailableNowCard = ({
  imageSrc,
  name,
  epNumber,
  popularity,
  hasDub,
}: {
  imageSrc: string;
  name: string;
  epNumber: number;
  airingTime: Date;
  score: number;
  popularity: number;
  hasDub: boolean;
}) => {
  return (
    <div className="bg-[rgb(30,30,30)] border-2 border-white/30 rounded-lg h-full p-4">
      <div className="flex gap-x-5">
        <div className="relative bg-gray-500 w-30 h-45 rounded-lg overflow-clip">
          <Image src={imageSrc} alt="" fill sizes=""></Image>
        </div>

        <div>
          <p className="text-xs uppercase mb-2">
            <span className="px-2 py-0.5 bg-red-500 rounded font-semibold mr-1.5 text-[10px]">
              Aired
            </span>
            <span className="text-white/70">Ep {epNumber}</span>
          </p>

          <div className="text-xl font-semibold line-clamp-2 mb-1">
            <p>{name}</p>
            <div className="flex gap-x-1 font-semibold text-base">
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
              <TiStarFullOutline className="text-yellow-500" />
            </div>
          </div>

          <div className="flex flex-col mb-4 gap-y-1">
            <div className="flex gap-x-1 font-semibold">
              <BiTrendingUp className="text-green-500" />
              <p className="text-xs">{popularity}%</p>
            </div>

            <div className="flex gap-x-1 text-xs items-center">
              <GoClockFill className="text-accent-one" />
              <p className="text-white/80">15 mins ago</p>
            </div>
          </div>

          <p className="text-xs text-white/60">
            {hasDub ? "Sub | Dub" : "Only Sub"}
          </p>
        </div>
      </div>
    </div>
  );
};

export const WeeksSchedule = async () => {
  const req1 = getMediaWithId(1);
  const req2 = getMediaWithId(5);
  const req3 = getMediaWithId(6);
  const req4 = getMediaWithId(7);
  const req5 = getMediaWithId(8);

  const [media1, media2, media3, media4, media5] = await Promise.all([
    req1,
    req2,
    req3,
    req4,
    req5,
  ]);
  return (
    <div className="caret-transparent">
      <div className="pl-5">
        <div className="flex min-h-75 flex-nowrap gap-x-3">
          <div className="flex-[2.5]">
            <div className="flex items-center gap-x-2 text-xl font-semibold mb-2">
              <span>Available Now</span>
              <div className="">
                <div className="size-2.5 bg-red-500 rounded-full">
                  <div className="size-full bg-red-400 animate-ping rounded-full"></div>
                </div>
              </div>
            </div>

            <AvailableNowCard
              airingTime={new Date()}
              epNumber={2}
              hasDub
              imageSrc={media1.coverImage.extraLarge}
              name={media1.title.english || media1.title.romaji}
              popularity={95}
              score={media1.averageScore / 10}
            />
          </div>

          <div className="flex-4">
            <p className="mb-2 text-xl font-semibold">Airing Soon</p>

            <div className="flex gap-x-3 h-full">
              <AiringSoonCard
                airingTime={new Date()}
                epNumber={5}
                imageSrc={media2.coverImage.extraLarge}
                name={media2.title.english || media2.title.romaji}
                popularity={82}
                score={media2.averageScore / 10}
              />

              <AiringSoonCard
                airingTime={new Date()}
                epNumber={5}
                imageSrc={media3.coverImage.extraLarge}
                name={media3.title.english || media3.title.romaji}
                popularity={82}
                score={media3.averageScore / 10}
              />

              <AiringSoonCard
                airingTime={new Date()}
                epNumber={5}
                imageSrc={media4.coverImage.extraLarge}
                name={media4.title.english || media4.title.romaji}
                popularity={82}
                score={media4.averageScore / 10}
              />

              <AiringSoonCard
                airingTime={new Date()}
                epNumber={5}
                imageSrc={media5.coverImage.extraLarge}
                name={media5.title.english || media5.title.romaji}
                popularity={82}
                score={media5.averageScore / 10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
