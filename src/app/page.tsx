import { AnimeCarousel } from "@/components/home/AnimeCarousel";
import { SpotlightCard } from "@/components/home/SpotlightCard";
import { Hero } from "@/sections/home/Hero";
import {
  fetchAiringAnime,
  fetchFantasyThemedAnime,
  fetchFeaturedAnime,
  fetchFemaleLeadAnime,
  fetchMartialArtsAnime,
  fetchMysteryAnime,
  fetchOneCourAnime,
  fetchSpotLights,
  fetchTrendingAnime,
} from "@/utils/homePageUtils";

export default async function Home() {
  const featuredAnime = await fetchFeaturedAnime();

  const spotlights = await fetchSpotLights();

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:gap-y-15 gap-y-7">
      <div>
        <Hero featuredAnime={featuredAnime} />
      </div>

      <div className="z-1 lg:px-15 2md:px-10 px-5 flex flex-col lg:gap-y-15 gap-y-11">
        <AnimeCarousel
          mediaArrayFetchFn={fetchTrendingAnime}
          title="Trending Around The World"
          subtitle="What everyone's talking about right now"
        />
        <SpotlightCard media={spotlights[0]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchAiringAnime}
          title="Title For Airing Anime"
          subtitle="Sub-title for Airing Anime"
        />

        <SpotlightCard media={spotlights[1]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchMartialArtsAnime}
          title="Title For Martial Arts Anime"
          subtitle="Sub-title for Martial Arts Anime"
        />

        <SpotlightCard media={spotlights[2]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchFemaleLeadAnime}
          title="Title For Female Lead Anime"
          subtitle="Sub-title for Female Lead Anime"
        />

        <SpotlightCard media={spotlights[3]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchFantasyThemedAnime}
          title="Title For Fantasy Themed Anime"
          subtitle="Sub-title for Fantasy Themed Anime"
        />

        <SpotlightCard media={spotlights[4]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchMysteryAnime}
          title="Title For Mystery Anime"
          subtitle="Sub-title for Mystery Anime"
        />

        <SpotlightCard media={spotlights[5]} />

        <AnimeCarousel
          mediaArrayFetchFn={fetchOneCourAnime}
          title="Zero-Commitment Anime"
          subtitle="Quick shows you can binge in one night"
        />
      </div>
    </div>
  );
}
