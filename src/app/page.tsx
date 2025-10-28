import { MiniCarousel } from "@/components/home/MiniCarousel";
import { getPageObject, getSchedules } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { getCurrentSeason } from "@/utils/sharedUtils";
import Link from "next/link";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

export default async function Home() {
  const heroCarouselAnime = await getPageObject({
    customFilter: { status: "RELEASING", season: getCurrentSeason() },
    customSort: ["POPULARITY_DESC"],
    perPage: 6,
  });
  const trendingAnime = await getPageObject({
    type: "trending",
    perPage: 10,
  });

  const popularThisSeason = await getPageObject({
    customFilter: {
      season: getCurrentSeason(),
      seasonYear: new Date().getFullYear(),
    },
    customSort: ["POPULARITY_DESC"],
  });

  const yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 1);

  const yesterdaySchedule = await getSchedules(yesterday);

  const yesterdayScheduleSorted = yesterdaySchedule.sort(
    (a, b) => b.media.trending - a.media.trending
  );

  const yesterdayBestAiringEp = yesterdayScheduleSorted[0];

  return (
    <div className="h-500">
      <Hero pageObjs={heroCarouselAnime} />

      <div className="max-w-[1300px] mx-auto min-[1090px]:pt-5 pt-5 min-[1090px]:p-0 px-2">
        <div className="">
          <MiniCarousel
            pageObj={trendingAnime}
            title="Trending Now"
            viewMoreLink="/"
          />
        </div>

        <div className="min-[1090px]:mt-20 mt-15 mb-7 max-w-5xl mx-auto min-[1090px]:px-0 px-2">
          <div
            className="flex justify-end min-[1090px]:px-10 py-2"
            style={{
              backgroundImage: `url("${yesterdayBestAiringEp.media.bannerImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-w-100 min-[1090px]:space-y-1">
              <p className="min-[1090px]:text-3xl text-lg min-[1090px]:max-w-fit max-w-40 bg-clip-text font-semibold min-[1090px]:line-clamp-2 line-clamp-2">
                {yesterdayBestAiringEp.media.title.english ||
                  yesterdayBestAiringEp.media.title.english}
              </p>
              <div className="flex text-yellow-300 min-[1090px]:text-xl text-sm">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </div>
              <p className="line-clamp-4 min-[1090px]:[display:-webkit-box] hidden text-white/70 text-sm">
                {yesterdayBestAiringEp.media.description}
              </p>

              <div className="flex min-[1090px]:flex-row flex-col gap-2">
                <Link
                  href={"/"}
                  target="_blank"
                  className="min-[1090px]:px-7 min-[1090px]:py-2 px-2 py-1 border-2 border-blue-400 min-[1090px]:text-base text-xs rounded-lg flex items-center w-fit gap-x-2"
                >
                  <FaPlay className="text-blue-400" />
                  <span>Watch Now</span>
                </Link>

                <button className="min-[1090px]:px-5 min-[1090px]:py-2 px-2 py-1 border-2 min-[1090px]:text-base text-xs rounded-lg flex items-center w-fit gap-x-2">
                  <FaPlus className="min-[1090px]:text-lg" />
                  <span>Add To Watchlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <MiniCarousel
            pageObj={popularThisSeason}
            title="Popular This Season"
            viewMoreLink="/"
          />
        </div>
      </div>
    </div>
  );
}
