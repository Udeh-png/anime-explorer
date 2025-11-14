import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";

export default async function Home() {
  const featuredAnime = [
    {
      id: 178025,
      title: "Gachiakuta",
      bannerPathname: "gachiakuta-banner",
    },
    {
      id: 153800,
      title: "One Punch Man",
      bannerPathname: "one_punch_man-banner",
    },
    {
      id: 177937,
      title: "Spy x Family",
      bannerPathname: "spy_x_family-banner",
    },
  ];

  const featuredId = featuredAnime.map((anime) => anime.id);
  const { media } = await getPageObject({
    customFilter: {
      id_in: featuredId,
    },
  });

  media.forEach((anime) => {
    const media = featuredAnime.find((fa) => fa.id === anime.id);
    anime.bannerImage = `/customBanners/desktopBanners/${media?.bannerPathname}.jpg`;
    anime.bannerImageMobile = `/customBanners/mobileBanners/${media?.bannerPathname}.jpg`;
  });

  return (
    <div>
      <div>
        <Hero peakTrendingAnime={media} />
      </div>
    </div>
  );
}
