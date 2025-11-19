import { MiniCarousel } from "@/components/home/MiniCarousel";
import { featuredAnime as featuredAnimeArr, featuredId } from "@/data";
import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";

export default async function Home() {
  const { media } = await getPageObject({
    customFilter: {
      id_in: featuredId,
    },
  });

  media.forEach((anime) => {
    const featuredAnime = featuredAnimeArr.find((fa) => fa.id === anime.id);
    anime.bannerImage = `/customBanners/desktopBanners/${featuredAnime?.bannerPathname}.jpg`;
    anime.bannerImageMobile = `/customBanners/mobileBanners/${featuredAnime?.bannerPathname}.jpg`;
  });

  return (
    <div className="grid gap-y-15 grid-rows-2 grid-cols-1">
      <div className="h-110">
        <Hero peakTrendingAnime={media} />
      </div>

      <div className="z-1 px-15">
        <MiniCarousel />
      </div>
    </div>
  );
}
