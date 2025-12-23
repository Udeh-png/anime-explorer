import { AiringSchedule, Character, Media, PageObject } from "./types";
import { timeConverter } from "./utils/sharedUtils";

const MEDIA_FIELDS_FRAGMENT = `
  fragment MediaFields on Media {
    id
    trending
    bannerImage
    averageScore
    status
    popularity
    format
    genres
    seasonYear
    season
    description
    episodes
    duration
    source
    nextAiringEpisode {
      airingAt
      episode
    }
    streamingEpisodes {
      title
      thumbnail
      url
    }
    relations {
      edges {
        relationType
        node {
          id
          status
          type
          title {
            english
            romaji
          }
          coverImage {
            extraLarge
            large
            medium
          }
        }
      }
    }
    externalLinks {
      url
    }
    studios {
      edges {
        node {
          name
          siteUrl
        }
        isMain
      }
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    title {
      english
      romaji
    }
  }
`;

const buildCharacterFields = (
  pageNo: number = 1
) => `characters(sort: FAVOURITES_DESC, perPage: 50, page: ${pageNo}) {
    pageInfo {
      currentPage
      perPage
      hasNextPage
    }
    edges {
      id
      role
      media {
        id
      }
      voiceActors {
        languageV2
        image {
          large
          medium
        }
        name {
          full
        }
      }
      node {
        id
        name {
          full
          native
          alternative
          alternativeSpoiler
        }
        image {
          large
          medium
        }
        description(asHtml: true)
        dateOfBirth {
          day
          month
          year
        }
        age
        bloodType
        gender
      }
    }
  }
`;

export type PresetType = "trending" | "airing" | "short" | "none";

export async function getMedia({
  type,
  customSorts,
  customFilters,
  cacheTimeMills,
}: {
  type: "fantasy" | "action" | "comedy" | "romance" | "ecchi" | "adventure";
  customSorts?: string[];
  customFilters?: object;
  cacheTimeMills?: number;
}): Promise<Media> {
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(new Date().getMonth() - 1);
  twoMonthsAgo.setDate(1);
  const twoMonthsAgoSec = Math.round(
    timeConverter(twoMonthsAgo.getTime(), "millisToSecs")
  );

  const presets: Record<string, { filter: object; sort: string[] }> = {
    action: {
      filter: {
        genre: '"action"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },

    comedy: {
      filter: {
        genre: '"comedy"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },

    fantasy: {
      filter: {
        genre: '"fantasy"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },

    romance: {
      filter: {
        genre: '"romance"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },

    ecchi: {
      filter: {
        genre: '"ecchi"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },

    adventure: {
      filter: {
        genre: '"adventure"',
        startDate_lesser: twoMonthsAgoSec,
      },
      sort: ["TRENDING_DESC"],
    },
  };

  const filters = customFilters || {};
  const presetFilter = presets[type].filter;
  const sorts = customSorts || presets[type].sort;
  const query = `
    ${MEDIA_FIELDS_FRAGMENT}
    query {
      Media (type: ANIME, ${Object.entries(filters).map(
        ([key, value]) =>
          `${key}: ${
            typeof value === "object" ? `[${value.join(",")}]` : value
          }`
      )}, ${Object.entries(presetFilter).map(
    ([key, value]) =>
      `${key}: ${typeof value === "object" ? `[${value.join(",")}]` : value}`
  )}, sort: ${sorts.join(",")}) {
        ...MediaFields
      }
    }
  `;
  const url = "https://graphql.anilist.co",
    options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
      cache: cacheTimeMills ? "force-cache" : "default",
      next: cacheTimeMills ? { revalidate: cacheTimeMills } : {},
    };
  return await fetch(url, options)
    .then(async (res) => {
      if (!res.ok) {
        console.log(res.statusText);
      }
      return await res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.errors) {
        console.log(jsonResponse.errors);
      }
      return jsonResponse.data.Media;
    })
    .catch((e) => {
      console.error(`Error ${e} occurred`);
    });
}

export async function getPageObject({
  pageNo = 1,
  perPage = 10,
  type = "none",
  customSorts,
  customFilters,
  cacheTimeMills,
}: {
  pageNo?: number;
  perPage?: number;
  type?: PresetType;
  customSorts?: string[];
  customFilters?: object;
  cacheTimeMills?: number;
}): Promise<PageObject> {
  const presets: Record<
    PresetType,
    { sort?: string[] | undefined; filter: object | undefined }
  > = {
    trending: {
      sort: ["TRENDING_DESC"],
      filter: {},
    },

    airing: {
      filter: {
        status_in: "[RELEASING]",
      },
      sort: ["TRENDING_DESC"],
    },

    short: {
      filter: {
        episodes_lesser: "14",
        format_in: "[TV, ONA]",
      },
    },

    none: {
      filter: undefined,
      sort: undefined,
    },
  };
  const preset: { sort?: string[] | undefined; filter: object | undefined } =
    presets[type];
  const sort = customSorts || preset.sort || ["SCORE_DESC"];
  const filter = customFilters || preset.filter || {};
  const query = `
    ${MEDIA_FIELDS_FRAGMENT}
    query {
      Page (page: ${pageNo},perPage: ${perPage}) {
        pageInfo {
          hasNextPage
          currentPage
        }
        media (type: ANIME, isAdult: false, format_not: MUSIC, ${Object.entries(
          filter
        ).map(
          ([key, value]) =>
            `${key}:${
              typeof value === "object" ? `[${value.join(",")}]` : value
            }`
        )}, ${sort ? `sort: [${sort.join(",")}]` : ""}) {
          ...MediaFields
          ${buildCharacterFields()}
        }
      }
    }
`;
  const url = "https://graphql.anilist.co",
    options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
      cache: cacheTimeMills ? "force-cache" : "default",
      next: cacheTimeMills ? { revalidate: cacheTimeMills } : {},
    };

  return await fetch(url, options)
    .then(async (res) => {
      if (!res.ok) {
        console.log(res.statusText);
      }
      return await res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.errors) {
        console.log(jsonResponse.errors);
      }
      return jsonResponse.data.Page;
    })
    .catch((e) => {
      console.error(e + "this is an error");
    });
}

export async function getMediaWithId(
  id: number,
  CharacterPageNo?: number
): Promise<Media> {
  const query = `
    ${MEDIA_FIELDS_FRAGMENT}
    query {
      Media (id: ${id}) {
        ...MediaFields
        ${buildCharacterFields(CharacterPageNo)}
      }
    }
  `;
  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };
  return await fetch(url, options)
    .then(async (res) => {
      if (!res.ok) {
        console.log(res.statusText);
      }
      return await res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.errors) {
        console.log(jsonResponse.errors);
      }
      return jsonResponse.data.Media;
    })
    .catch((e) => {
      console.error(`Error ${e} occurred`);
    });
}

export async function getCharacterWithId(
  mediaId: number,
  charId: number,
  currentPage?: number
): Promise<Character> {
  function isCharacter(x: unknown): x is Character {
    return (
      !!x &&
      typeof (x as Character).node.id === "number" &&
      (x as Character).node.id === charId
    );
  }
  const media: Media = await getMediaWithId(mediaId, currentPage);
  const characterObj = media.characters;
  const edges = media.characters.edges;
  const character: Character = edges.find(isCharacter)!;
  if (character === undefined && characterObj.pageInfo.hasNextPage) {
    return await getCharacterWithId(
      mediaId,
      charId,
      characterObj.pageInfo.currentPage + 1
    );
  }
  return character;
}

export async function getCharacterFromSearch(
  mediaId: number,
  search: string
): Promise<Character[]> {
  const media: Media = await getMediaWithId(mediaId);
  const edges = media.characters.edges;
  const pageInfo = media.characters.pageInfo;
  let currentPage = pageInfo.currentPage;
  let hasNextPage = pageInfo.hasNextPage;
  const allCharEdges = [...edges];
  while (hasNextPage) {
    currentPage++;
    const moreCharEdges = await getMediaWithId(mediaId, currentPage);
    allCharEdges.push(...moreCharEdges.characters.edges);
    if (currentPage < 14) {
      hasNextPage = moreCharEdges.characters.pageInfo.hasNextPage;
    } else {
      break;
    }
  }

  const searchQuery: string = search.toLowerCase();
  const results = allCharEdges.filter((edge) => {
    const charNameQuery = edge.node.name.full.toLowerCase();
    if (charNameQuery.includes(searchQuery)) {
      return edge;
    }
  });
  return results;
}

export async function getSchedules(date: Date): Promise<AiringSchedule[]> {
  const timestamp = Math.round(
    timeConverter(
      date.getTime() - timeConverter(date.getHours(), "hoursToMillis"),
      "millisToSecs"
    )
  );
  const timestamp24hrs = Math.round(timestamp + 3600 * 24);

  const query = `
    query {
      Page {
        airingSchedules (airingAt_greater: ${timestamp}, airingAt_lesser: ${timestamp24hrs}) {
          airingAt
          episode
          mediaId
          media {
            popularity
            isAdult
            genres
            format
            trending
            bannerImage
            description
            streamingEpisodes {
              url
            }
            externalLinks {
              url
            }            
            coverImage {
              medium
              large
              extraLarge
            }
            title {
              english
              romaji
            }
          }
        }
      }
    }
  `;

  const url = "https://graphql.anilist.co",
    options: RequestInit = {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      cache: "force-cache",
      next: { revalidate: 86400 },
    };

  return await fetch(url, options)
    .then(async (res: Response) => {
      if (res.ok === false) {
        console.log(res, date);
      }
      return await res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.error) {
        console.log(jsonResponse);
      }
      return jsonResponse.data.Page.airingSchedules;
    })
    .catch((e) => {
      console.error(`Error ${e} occurred`);
    });
}
