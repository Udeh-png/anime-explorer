import { MiniCarousel } from "@/components/home/MiniCarousel";
import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { getCurrentSeason } from "@/utils/sharedUtils";

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

  const hiddenGems = await getPageObject({
    customFilter: {
      popularity_lesser: 5000,
      averageScore_greater: 70,
      episodes_greater: 1,
      countryOfOrigin: "JP",
      tag_not_in: '["kids"]',
    },
  });
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

        <div className="max-w-4xl mx-auto h-40 mt-5 mb-2 border"></div>

        <div className="mb-5">
          <MiniCarousel
            pageObj={hiddenGems}
            title="Hidden Gems"
            viewMoreLink="/"
          />
        </div>
      </div>
    </div>
  );
}
