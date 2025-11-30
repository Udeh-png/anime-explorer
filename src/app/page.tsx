import { MiniCarousel } from "@/components/home/MiniCarousel";
import { PlayButton } from "@/components/shared/ActionButtons";
import { featuredAnime as featuredAnimeArr, featuredId } from "@/data";
import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";

export default async function Home() {
  const featuredAnimeFetch = getPageObject({
    customFilter: {
      id_in: featuredId,
    },
  });
  const trendingAnimeFetch = getPageObject({
    type: "trending",
  });

  const [featuredAnimePO, trendingAnimePO] = await Promise.all([
    featuredAnimeFetch,
    trendingAnimeFetch,
  ]);
  const featuredAnime = featuredAnimePO.media;
  const trendingAnime = trendingAnimePO.media;

  featuredAnime.forEach((anime) => {
    const featuredAnime = featuredAnimeArr.find((fa) => fa.id === anime.id);
    anime.bannerImage = `/customBanners/desktopBanners/${featuredAnime?.bannerPathname}.jpg`;
    anime.bannerImageMobile = `/customBanners/mobileBanners/${featuredAnime?.bannerPathname}.jpg`;
  });

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:gap-y-15 gap-y-7">
      <div>
        <Hero featuredAnime={featuredAnime} />
      </div>

      <div className="z-1 lg:px-15 2md:px-10 px-5">
        <MiniCarousel medias={trendingAnime} />
      </div>
    </div>
  );
}
