import { useState } from "react";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";

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
    ? "rounded-full size-10 bg-black/30 text-white"
    : "border-2 text-accent-one ";
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
    ? "rounded-full size-10 bg-black/30 text-white"
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToFavorites}
      className={`flex justify-center items-center cursor-pointer ${styles}`}
    >
      {isFavorited ? (
        <FaHeart className={rounded ? "text-red-500" : "text-accent-one"} />
      ) : (
        <FaRegHeart />
      )}
    </button>
  );
};
