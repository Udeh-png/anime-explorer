import { featuredAnime as featuredAnimeArr, featuredId } from "@/data";
import { getPageObject } from "@/queries";
import { Media } from "@/types";

export const fetchFeaturedAnime: () => Promise<Media[]> = async () => {
  const featuredAnime = (
    await getPageObject({
      customFilter: {
        id_in: featuredId,
      },
    })
  ).media;

  featuredAnime.forEach((anime) => {
    const featuredAnime = featuredAnimeArr.find((fa) => fa.id === anime.id);
    anime.bannerImage = `/customBanners/desktopBanners/${featuredAnime?.bannerPathname}.jpg`;
    anime.bannerImageMobile = `/customBanners/mobileBanners/${featuredAnime?.bannerPathname}.jpg`;
  });

  return featuredAnime;
};

export const fetchOneCourAnime: () => Promise<Media[]> = async () => {
  const hasPrequel = (media: Media) => {
    return (
      media.relations?.edges?.some((r) => r.relationType === "PREQUEL") || false
    );
  };

  const hasSequel = (media: Media) => {
    return (
      media.relations?.edges?.some((r) => r.relationType === "SEQUEL") || false
    );
  };
  let pageNo = 0;
  const PAGE_MAX = 5;
  const shortAnime: Media[] = [];
  while (shortAnime.length < 25 && pageNo < PAGE_MAX) {
    pageNo++;
    const shortMedia = (
      await getPageObject({
        type: "short",
        pageNo: pageNo,
        perPage: 50,
      })
    ).media;
    const filtered = shortMedia.filter(
      (sm) => !hasPrequel(sm) && !hasSequel(sm)
    );
    shortAnime.push(...filtered);
  }
  console.log(pageNo);

  return shortAnime;
};

export const fetchTrendingAnime = async () => {
  return await getPageObject({
    type: "trending",
    perPage: 20,
  }).then((e) => e.media);
};
