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
    <div>
      <div>
        <Hero peakTrendingAnime={media} />
      </div>
    </div>
  );
}
