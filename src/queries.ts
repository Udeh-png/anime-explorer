import { Media, PageObject } from "./types";

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
  const sort = customSort || preset.sort;
  const filter = customFilter || preset.filter;
  const query = `
    query {
      Page (page: ${pageNo || 1},perPage: ${perPage}) {
        pageInfo {
          hasNextPage
          currentPage
        }
        media (type: ANIME, isAdult: false, ${Object.entries(filter).map(
          ([key, value]) => `${key}:${value}`
        )}, sort: ${sort.join(",")}) {
          id
          trending
          bannerImage
          averageScore
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
                language
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

export async function getMediaWithId(id: number): Promise<Media> {
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
        seasonYear
        description
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
              language
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
