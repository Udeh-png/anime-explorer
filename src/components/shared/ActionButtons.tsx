"use client";

import { useState } from "react";
import {
  FaBookmark,
  FaHeart,
  FaPlay,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";
import { MdPlayDisabled } from "react-icons/md";

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
    ? "rounded-full bg-black/50 text-white"
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToWatchList}
      className={`flex 3md:size-10 size-8 justify-center items-center cursor-pointer ${styles}`}
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
    ? "rounded-full bg-black/50 text-white"
    : "border-2 text-accent-one";
  return (
    <button
      onClick={addToFavorites}
      className={`flex 3md:size-10 size-8 justify-center items-center cursor-pointer ${styles}`}
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
  externalLink,
}: {
  streamingLink: string | undefined;
  externalLink: string;
  rounded?: boolean;
}) => {
  const link = streamingLink || externalLink || "unavailable";
  return (
    <div
      className="flex items-center text-sm 3md:size-10 size-8 gap-x-2 uppercase justify-center text-white rounded-full bg-black/50"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      {link === "unavailable" ? (
        <MdPlayDisabled className="text-2xl" />
      ) : (
        <FaPlay className="" />
      )}
    </div>
  );
};
