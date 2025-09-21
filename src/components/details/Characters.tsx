import { getMediaWithId } from "@/queries";
import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaHashtag } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export const Characters = ({ media }: { media: Media }) => {
  const { characters: chars, id, title: titleObject } = media;
  const title = titleObject.english || titleObject.romaji;
  const titleForUrl = title
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  const [charsState, setCharsState] = useState(chars);
  const [charEdgesState, setCharEdgesState] = useState(charsState.edges);
  const scrollableRef = useRef<HTMLDivElement>(null);

  async function loadMoreChars() {
    const currentPage = charsState.pageInfo.currentPage;
    if (charsState.pageInfo.hasNextPage) {
      const { characters } = await getMediaWithId(id, currentPage + 1);
      setCharsState(characters);
      setCharEdgesState((prev) => [...prev, ...characters.edges]);
    }
  }

  function loadOnScroll() {
    if (scrollableRef.current) {
      const scrollable = scrollableRef.current;
      if (
        scrollable.clientHeight + scrollable.scrollTop ===
        scrollable.scrollHeight
      ) {
        loadMoreChars();
        console.log("reached");
      }
    }
  }

  return (
    <div
      className="grid min-[600px]:grid-cols-2 min-[790px]:grid-cols-3 gap-3 h-110 overflow-auto scrollable"
      onScroll={loadOnScroll}
      ref={scrollableRef}
    >
      <div className="h-110 w-3 absolute text-[10px] min-[600px]:flex left-[49.1%] min-[790px]:left-[33.1%] hidden flex-col justify-between">
        <FaChevronUp />
        <FaChevronDown />
      </div>
      <div className="h-110 w-3 absolute min-[790px]:flex text-[10px] right-[33%] hidden flex-col justify-between text-wrap">
        <FaChevronUp />
        <FaChevronDown />
      </div>
      {charEdgesState.map((characterEdge, i) => {
        const { node, role } = characterEdge;
        const { dateOfBirth, age, image, name, id: charId } = node;
        const { day, month, year } = dateOfBirth;

        return (
          <Link
            href={`/${id}/${titleForUrl}/${charId}`}
            className="h-29 p-4 flex flex-col justify-between rounded-lg bg-white/20"
            key={i}
          >
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                <div className="min-w-12 h-12 relative overflow-clip text-[10px] rounded-full">
                  <Image
                    src={image.medium}
                    alt={`${name.full} image`}
                    fill
                    sizes="(>600px) 100vw"
                    className="object-cover"
                  ></Image>
                </div>
                <div>
                  <p className="text-sm w-full">{name.full}</p>
                  <p className="text-xs text-white/50 line-clamp-1">
                    {name.native}
                    {name.alternative.map((name) => ", " + name)}
                  </p>
                </div>
              </div>
              <div className="text-xs flex gap-1 items-center">
                <FaCalendarDays />

                <p className="">
                  {day && month && year
                    ? `${String(day).padStart(2, "0")}/${String(month).padStart(
                        2,
                        "0"
                      )}/${year}`
                    : age}
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <p className="px-2 py-[1px] rounded-full text-xs bg-accent-two/50">
                {role}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
