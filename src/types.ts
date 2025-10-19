enum FormatEnum {
  TV = "TV",
  OVA = "OVA",
  ONA = "ONA",
  TV_SHORT = "TV Short",
  MUSIC = "Music",
  MOVIE = "Movie",
  SPECIAL = "Special",
}

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

export type Character = {
  role: string;
  node: {
    id: number;
    description: string;
    age: number;
    gender: string;
    bloodType: string;
    dateOfBirth: {
      year: number;
      month: number;
      day: number;
    };
    name: { full: string; native: string; alternative: string[] };
    image: { large: string; medium: string };
  };
  voiceActors: {
    name: { full: string };
    languageV2: string;
    image: { large: string; medium: string };
  }[];
};

export type Media = {
  id: number;
  trending: number;
  bannerImage: string;
  averageScore: number;
  seasonYear: number;
  season: string;
  description: string;
  isAdult: boolean;
  status:
    | "FINISHED"
    | "HIATUS"
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "CANCELLED";
  format: FormatEnum;
  genres: string[];
  popularity: number;
  episodes: number;
  nextAiringEpisode: { episode: number };
  studios: {
    nodes: {
      name: string;
      siteUrl: string;
    }[];
  };
  duration: number;
  source: string;
  streamingEpisodes: {
    title: string;
    thumbnail: string;
    url: string;
  }[];
  relations: {
    edges: {
      relationType: string;
      node: {
        id: number;
        status:
          | "FINISHED"
          | "HIATUS"
          | "RELEASING"
          | "NOT_YET_RELEASED"
          | "CANCELLED";
        type: string;
        coverImage: {
          extraLarge: string;
          large: string;
          medium: string;
        };
        title: {
          english: string;
          romaji: string;
        };
      };
    }[];
  };
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
    edges: Character[];
  };

  isFavorite: boolean;
  isWatchListed: boolean;
  favoriteCount: number;
  watchListCount: number;
};

export type PageObject = {
  pageInfo: {
    hasNextPage: boolean;
    currentPage: number;
  };
  media: Media[];
};

export type AiringSchedule = {
  id: number;
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
  mediaId: number;
  media: Media;
};

export type SchedulePageFilter = {
  genre: string[];
  format: string[];
  lists: ["favorite" | "watch list"] | [];
};
