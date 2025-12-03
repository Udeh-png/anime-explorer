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

  return shortAnime;
};

export const fetchTrendingAnime = async () => {
  return await getPageObject({
    type: "trending",
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchAiringAnime = async () => {
  return await getPageObject({
    type: "airing",
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchFemaleLeadAnime = async () => {
  return await getPageObject({
    customFilter: {
      tag_in: '["Female Protagonist", "Primarily Female Cast"]',
    },
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchFantasyThemedAnime = async () => {
  return await getPageObject({
    customFilter: {
      format_in: "[TV, ONA]",
      genre_in: '["Sci-Fi"]',
      averageScore_greater: 81,
    },
    customSort: ["POPULARITY"],
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchMartialArtsAnime = async () => {
  return await getPageObject({
    customFilter: {
      tag_in: '["Martial Arts"]',
    },
    customSort: ["SCORE_DESC"],
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchMysteryAnime = async () => {
  return await getPageObject({
    customFilter: {
      genre: '"Mystery"',
    },
    perPage: 20,
  }).then((e) => e.media);
};
