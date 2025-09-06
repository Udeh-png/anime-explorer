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

export type PageObject = {
  pageInfo: {
    hasNextPage: Boolean;
    currentPage: number;
  };
  media: {
    id: number;
    trending: number;
    bannerImage: string;
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
  }[];
};
