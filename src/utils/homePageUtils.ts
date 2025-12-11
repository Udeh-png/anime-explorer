import { featuredAnime as featuredAnimeArr, featuredId } from "@/data";
import { getMedia, getPageObject } from "@/queries";
import { Media } from "@/types";

export const fetchFeaturedAnime: () => Promise<Media[]> = async () => {
  const featuredAnime = (
    await getPageObject({
      customFilters: {
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
    customFilters: {
      tag_in: '["Female Protagonist", "Primarily Female Cast"]',
    },
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchFantasyThemedAnime = async () => {
  return await getPageObject({
    customFilters: {
      format_in: "[TV, ONA]",
      genre_in: '["Sci-Fi"]',
      averageScore_greater: 81,
    },
    customSorts: ["POPULARITY"],
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchMartialArtsAnime = async () => {
  return await getPageObject({
    customFilters: {
      tag_in: '["Martial Arts"]',
    },
    customSorts: ["SCORE_DESC"],
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchMysteryAnime = async () => {
  return await getPageObject({
    customFilters: {
      genre: '"Mystery"',
      averageScore_greater: 81,
    },
    customSorts: ["TRENDING"],
    perPage: 20,
  }).then((e) => e.media);
};

export const fetchSpotLights = async () => {
  const genres: ["action", "romance", "comedy", "mystery"] = [
    "action",
    "romance",
    "comedy",
    "mystery",
  ];
  const fetchedId: number[] = [];
  const spotlights = [];

  for (const genre of genres) {
    let anime = null;
    let attempts = 0;
    const maxAttempts = 10; // Safety limit

    // Keep fetching until we get one with a banner
    while (!anime?.bannerImage && attempts < maxAttempts) {
      anime = await getMedia({
        type: genre,
        customFilters: { id_not_in: fetchedId },
      });

      if (anime?.id) {
        fetchedId.push(anime.id);

        // If it has a banner, we're done
        if (anime.bannerImage) {
          spotlights.push(anime);
          break;
        }
      }

      attempts++;
    }

    // If we exhausted attempts and still no banner, skip this genre
    if (attempts >= maxAttempts) {
      console.warn(
        `Could not find ${genre} anime with banner after ${maxAttempts} attempts`
      );
    }
  }

  return spotlights;
};
