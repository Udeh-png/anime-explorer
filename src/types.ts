export type CardData = {
  id: number;
  cardImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  title: {
    english: string;
    romaji: string;
  };
  hasDub: boolean;
};

export type Media = {
  id: number;
  trending: number;
  bannerImage: string;
  averageScore: number;
  seasonYear: number;
  description: string;
  status: "FINISHED" | "HIATUS" | "RELEASING" | "NOT_YET_AIRING" | "CANCELLED";
  format: "TV" | "OVA" | "ONA" | "TV_SHORT" | "MUSIC" | "MOVIE" | "SPECIAL";
  genres: string[];
  popularity: number;
  externalLinks: {
    url: string;
  }[];
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  title: {
    english: string;
    romaji: string;
  };

  characters: {
    pageInfo: {
      currentPage: number;
      hasNextPage: boolean;
    };
    edges: {
      role: string;
      node: {
        id: number;
        description: string;
        age: number;
        dateOfBirth: {
          year: number;
          month: number;
          day: number;
        };
        name: { full: string; native: string; alternative: string[] };
        image: { large: string; medium: string };
      };
      voiceActors: {
        name: { first: string; last: string };
        language: string;
        image: { large: string; image: string };
      }[];
    }[];
  };

  isFavorite: boolean;
};

export type PageObject = {
  pageInfo: {
    hasNextPage: boolean;
    currentPage: number;
  };
  media: Media[];
};
