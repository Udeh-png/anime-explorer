import { AiringSchedule, Character, Media, PageObject } from "./types";
import { timeConverter } from "./utils/sharedUtils";

export type PresetType = "trending" | "classics" | "airing" | "top_fifty";

export async function getPageObject({
  pageNo = 1,
  perPage = 10,
  type = "trending",
  customSort,
  customFilter,
}: {
  pageNo?: number;
  perPage?: number;
  type?: PresetType;
  customSort?: string[];
  customFilter?: object;
}): Promise<PageObject> {
  const presets: Record<PresetType, { sort: string[]; filter: object }> = {
    trending: {
      sort: ["TRENDING_DESC"],
      filter: {},
    },

    classics: {
      sort: ["SCORE_DESC"],
      filter: { startDate_lesser: "20100000" },
    },

    airing: {
      sort: ["SCORE_DESC"],
      filter: {
        status_not_in: "[FINISHED, HIATUS, NOT_YET_RELEASED, CANCELLED]",
      },
    },

    top_fifty: {
      sort: ["SCORE_DESC"],
      filter: {},
    },
  };
  const preset: { sort: string[]; filter: object } = presets[type];
  const sort = customSort || preset.sort || ["SCORE_DESC"];
  const filter = customFilter || preset.filter;
  const query = `
    query {
      Page (page: ${pageNo},perPage: ${perPage}) {
        pageInfo {
          hasNextPage
          currentPage
        }
        media (type: ANIME, isAdult: false, format_not: MUSIC, ${Object.entries(
          filter
        ).map(([key, value]) => `${key}:${value}`)}, sort: ${sort.join(",")}) {
          id
          trending
          bannerImage
          averageScore
          streamingEpisodes {
            url
          }
          genres
          externalLinks{
            url
          }
          seasonYear
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
          characters {
            edges {
              role
              node {
                name {
                  full
                }
              }
              voiceActors (language: ENGLISH) {
                name {
                  first
                }
                languageV2
              } 
            }
          }
        }
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
      return await res.json();
    })
    .then((jsonResponse) => {
      // console.log(jsonResponse);
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
    query {
      Media (id: ${id}) {
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
        nextAiringEpisode {
          episode
        }
        duration
        source
        studios {
          nodes {
            name
            siteUrl
          }
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
        characters (sort: FAVOURITES_DESC, perPage: 50, page: ${
          CharacterPageNo || 1
        }) {
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
              description (asHtml: true)
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
      return await res.json();
    })
    .then((jsonResponse) => {
      // console.log(jsonResponse);
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
            genres
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
