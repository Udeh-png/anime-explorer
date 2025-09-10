import { Media } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaMicrophone, FaRegHeart, FaStar } from "react-icons/fa";

export const Card = ({ media }: { media: Media }) => {
  const {
    id,
    title: titleObject,
    coverImage,
    averageScore,
    characters,
    seasonYear: year,
  } = media;
  const title = titleObject.english || titleObject.romaji;
  const hasDub = Boolean(characters.edges[0].voiceActors);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="w-63 relative h-95 rounded-2xl overflow-clip group">
      <Link href={`/details/${id}`} className="w-full h-full">
        <Image
          fill
          alt={title}
          src={coverImage.extraLarge}
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="mask-linear-from-black mask-linear-from-75% mask-linear-to-transparent py-4 absolute bottom-0 left-0 w-full px-3 min-h-25 bg-linear-to-b from-transparent to-black/70 flex flex-col justify-center rounded-b-[inherit]">
          <p className="text-white font-semibold text-[15px] leading-tight mb-2 line-clamp-1 transition-colors">
            {title}
          </p>
          <p className="text-xs text-white/80">{year}</p>
        </div>

        <div className="absolute top-3 right-2 flex gap-x-[6px] items-center text-yellow-500 bg-black/70 px-[8px] py-[2px] rounded">
          <FaStar />
          <p className="text-[10px]">{averageScore / 10}</p>
        </div>

        {hasDub && (
          <div className="absolute top-3 left-2 flex gap-x-1 items-center bg-green-500 px-[8px] py-[4px] rounded">
            <FaMicrophone className="text-[10px]" />
            <p className="text-[10px]">has dub</p>
          </div>
        )}
      </Link>
      <div
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
        className="absolute right-2 bottom-21 cursor-pointer"
      >
        <AnimatePresence>
          {isFavorite ? (
            <motion.section
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0,
              }}
              className="rounded-full bg-accent-one p-3 text-[22px]"
            >
              <FaHeart />
            </motion.section>
          ) : (
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0,
              }}
              className="rounded-full bg-black/80 p-3 text-[22px]"
            >
              <FaRegHeart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
