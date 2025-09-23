import { number } from "motion";

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
    edges: Character[];
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
