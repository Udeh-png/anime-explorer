import { useState } from "react";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";

export const FavoriteButton = ({ rounded }: { rounded?: boolean }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const addToFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const styles = rounded
    ? "rounded-full size-10 bg-black/30 text-white"
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToFavorite}
      className={`flex justify-center items-center cursor-pointer ${styles}`}
    >
      {isFavorited === true ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export const LikeButton = ({ rounded }: { rounded?: boolean }) => {
  const [isLiked, setIsLiked] = useState(false);

  const addToLikes = () => {
    setIsLiked(!isLiked);
  };

  const styles = rounded
    ? "rounded-full size-10 bg-black/30 text-white"
    : "border-2 text-accent-one ";
  return (
    <button
      onClick={addToLikes}
      className={`flex justify-center items-center cursor-pointer ${styles}`}
    >
      {isLiked === true ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
