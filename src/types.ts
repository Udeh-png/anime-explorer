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
    edges: {
      voiceActors: { name: string }[] | null;
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
