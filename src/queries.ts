import { CardData, PageObject } from "./types";

export async function getTenTrending(pageNo?: number): Promise<PageObject> {
  const query = `
    query {
      Page (page: ${pageNo || 1},perPage: 10) {
        pageInfo {
          hasNextPage
          currentPage
        }
        media (type: ANIME, sort: TRENDING_DESC) {
          id
          trending
          bannerImage
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
              id
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
    .then((data) => {
      // console.log(data);
      return data.data.Page;
    })
    .catch((e) => {
      console.log(e + "this is an error");
    });
}
