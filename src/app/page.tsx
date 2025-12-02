import { MiniCarousel } from "@/components/home/MiniCarousel";
import { Hero } from "@/sections/home/Hero";
import { Media } from "@/types";
import {
  fetchFeaturedAnime,
  fetchOneCourAnime,
  fetchTrendingAnime,
} from "@/utils/homePageUtils";

export default async function Home() {
  const trendingAnimeFetch = fetchTrendingAnime();
  const featuredAnimeFetch = fetchFeaturedAnime();
  const oneCourAnimeFetch = fetchOneCourAnime();

  const [trendingAnime, featuredAnime, oneCourAnime]: Media[][] =
    await Promise.all([
      trendingAnimeFetch,
      featuredAnimeFetch,
      oneCourAnimeFetch,
    ]);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:gap-y-15 gap-y-7">
      <div>
        <Hero featuredAnime={featuredAnime} />
      </div>

      <div className="z-1 lg:px-15 2md:px-10 px-5 flex flex-col gap-y-25">
        <MiniCarousel
          medias={trendingAnime}
          title="Trending Around The World"
          subtitle="What everyone's watching right now"
        />

        <MiniCarousel
          medias={oneCourAnime}
          title="Zero-Commitment Anime"
          subtitle="Quick shows you can binge in one night"
        />
      </div>
    </div>
  );
}
