"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaBookmark,
  FaHeart,
  FaInfo,
  FaPlay,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";

export const WatchListButton = ({
  rounded,
  initialIsWatchListed,
}: {
  rounded?: boolean;
  initialIsWatchListed: boolean;
}) => {
  const [isWatchListed, setIsWatchListed] = useState(initialIsWatchListed);

  const addToWatchList = () => {
    setIsWatchListed(!isWatchListed);
  };

  const styles = rounded
    ? "rounded-full bg-black/50 text-white 3md:size-10 size-8"
    : "border-2 text-accent-one size-10";
  return (
    <button
      onClick={addToWatchList}
      className={`flex justify-center items-center cursor-pointer ${styles}`}
    >
      {isWatchListed === true ? (
        <FaBookmark className="text-accent-one" />
      ) : (
        <FaRegBookmark />
      )}
    </button>
  );
};

export const FavoriteButton = ({
  rounded,
  initialIsFavorited,
}: {
  rounded?: boolean;
  initialIsFavorited: boolean;
}) => {
  const [isFavorited, setIsFavorited] = useState(initialIsFavorited);

  const addToFavorites = () => {
    setIsFavorited(!isFavorited);
  };

  const styles = rounded
    ? "rounded-full bg-black/50 text-white 3md:size-10 size-8"
    : "border-2 text-accent-one size-10";
  return (
    <button
      onClick={addToFavorites}
      className={`flex justify-center items-center cursor-pointer ${styles}`}
    >
      {isFavorited ? (
        <FaHeart className={rounded ? "text-red-600" : "text-accent-one"} />
      ) : (
        <FaRegHeart />
      )}
    </button>
  );
};

export const PlayButton = ({
  streamingLink,
}: {
  streamingLink: {
    url: string;
    platform: string | null;
    linkType: "streaming" | "social" | "none";
  };
  rounded?: boolean;
}) => {
  const link = streamingLink;
  return (
    <div
      className="flex items-center text-sm 3md:size-10 size-8 gap-x-2 uppercase justify-center text-white rounded-full bg-black/50"
      onClick={() => {
        window.open(link.url, "_blank");
      }}
    >
      {streamingLink.linkType === "streaming" && <FaPlay />}
      {streamingLink.linkType === "social" && <FaArrowRight />}
      {streamingLink.linkType === "none" && <FaInfo />}
    </div>
  );
};
