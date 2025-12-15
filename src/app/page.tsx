import { MiniCarousel } from "@/components/home/MiniCarousel";
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
  const featuredAnimeFetch = fetchFeaturedAnime();
  const trendingAnimeFetch = fetchTrendingAnime();
  const airingAnimeFetch = fetchAiringAnime();
  const oneCourAnimeFetch = fetchOneCourAnime();
  const martialArtsAnimeFetch = fetchMartialArtsAnime();
  const mysteryAnimeFetch = fetchMysteryAnime();
  const femaleLeadAnimeFetch = fetchFemaleLeadAnime();
  const fantasyAnimeThemedFetch = fetchFantasyThemedAnime();
  const spotlightsFetch = fetchSpotLights();

  const [
    featuredAnime,
    trendingAnime,
    airingAnime,
    oneCourAnime,
    martialArtsAnime,
    mysteryAnime,
    femaleLeadAnime,
    fantasyThemedAnime,
    spotlights,
  ] = await Promise.all([
    featuredAnimeFetch,
    trendingAnimeFetch,
    airingAnimeFetch,
    oneCourAnimeFetch,
    martialArtsAnimeFetch,
    mysteryAnimeFetch,
    femaleLeadAnimeFetch,
    fantasyAnimeThemedFetch,
    spotlightsFetch,
  ]);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:gap-y-15 gap-y-7">
      <div>
        <Hero featuredAnime={featuredAnime} />
      </div>

      <div className="z-1 lg:px-15 2md:px-10 px-5 flex flex-col lg:gap-y-15 gap-y-11">
        <MiniCarousel
          medias={trendingAnime}
          title="Trending Around The World"
          subtitle="What everyone's talking about right now"
        />

        <SpotlightCard media={spotlights[0]} />

        <MiniCarousel
          medias={airingAnime}
          title="Title For Airing Anime"
          subtitle="Sub-title for Airing Anime"
        />

        <SpotlightCard media={spotlights[1]} />

        <MiniCarousel
          medias={oneCourAnime}
          title="Zero-Commitment Anime"
          subtitle="Quick shows you can binge in one night"
        />

        <SpotlightCard media={spotlights[2]} />

        <MiniCarousel
          medias={martialArtsAnime}
          title="Title For Martial Arts Anime"
          subtitle="Sub-title for Martial Arts Anime"
        />

        <SpotlightCard media={spotlights[3]} />

        <MiniCarousel
          medias={mysteryAnime}
          title="Title For Mystery Anime"
          subtitle="Sub-title for Mystery Anime"
        />

        <SpotlightCard media={spotlights[4]} />

        <MiniCarousel
          medias={femaleLeadAnime}
          title="Title For Female Lead Anime"
          subtitle="Sub-title for Female Lead Anime"
        />

        <SpotlightCard media={spotlights[5]} />

        <MiniCarousel
          medias={fantasyThemedAnime}
          title="Title For Fantasy Themed Anime"
          subtitle="Sub-title for Fantasy Themed Anime"
        />
      </div>
    </div>
  );
}
