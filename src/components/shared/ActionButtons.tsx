"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBookmark,
  FaHeart,
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
    ? "rounded-full bg-black/50 text-white"
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToWatchList}
      className={`flex size-10 justify-center items-center cursor-pointer ${styles}`}
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
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToFavorites}
      className={`flex size-10 justify-center items-center cursor-pointer ${styles}`}
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
  rounded,
}: {
  streamingLink: string | undefined;
  externalLink: string;
  rounded?: boolean;
}) => {
  const styles = rounded
    ? "rounded-full w-10! bg-black/50"
    : "px-4 bg-accent-one";
  return (
    <Link
      href={streamingLink || externalLink}
      className={`flex items-center text-sm h-10 gap-x-2 uppercase w-fit justify-center text-white ${styles}`}
    >
      <FaPlay className="" />
      {rounded ? "" : streamingLink ? "Start Watching Now" : "See Socials"}
    </Link>
  );
};
