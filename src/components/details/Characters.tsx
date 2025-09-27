import { getCharacterFromSearch, getMediaWithId } from "@/queries";
import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { SearchBar } from "../shared/SearchBar";

export const Characters = ({ media }: { media: Media }) => {
  const { characters: chars, id, title: titleObject } = media;
  const title = titleObject.english || titleObject.romaji;
  const titleForUrl = title
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  const [charsState, setCharsState] = useState(chars); //Use this for current page
  const [charEdgesState, setCharEdgesState] = useState(charsState.edges); // Use this to set all characters
  const [displayCharacters, setDisplayCharacters] = useState(charEdgesState); // use this to render characters, all or search
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  async function loadMoreChars() {
    const currentPage = charsState.pageInfo.currentPage;
    if (charsState.pageInfo.hasNextPage) {
      const { characters } = await getMediaWithId(id, currentPage + 1);
      setCharsState(characters);
      setDisplayCharacters((prev) => [...prev, ...characters.edges]);
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
      }
    }
  }

  useEffect(() => {
    const scrollable = scrollableRef.current;
    if (scrollable) {
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollable.clientHeight;
      if (scrollHeight > clientHeight) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    }
  }, [displayCharacters]);

  //TODO: You know how i made it so the search only check the first 13 pages make it so it can load more on click or scroll or something

  //TODO: Add loading spinners for loading more characters and searching

  return (
    <div className="">
      <div className="mb-3 flex justify-between">
        <div className="flex items-center gap-x-2">
          <SearchBar
            labelText="Search Character"
            actionFunction={async (formData) => {
              const query = formData.get("search-character") as string;
              if (query.trim()) {
                const searchedCharacter = await getCharacterFromSearch(
                  id,
                  query
                );
                setIsSearching(true);
                setDisplayCharacters(searchedCharacter);
              }
            }}
          />
        </div>

        {isSearching && (
          <button
            className="min-[600px]:mr-10 min-[600px]:text-sm text-xs text-accent-one"
            onClick={() => {
              setDisplayCharacters(charEdgesState);
              setIsSearching(false);
            }}
          >
            All Characters
          </button>
        )}
      </div>
      <div
        className="grid min-[600px]:grid-cols-2 min-[790px]:grid-cols-3 gap-3 max-h-110 overflow-auto scrollable"
        onScroll={() => {
          if (!isSearching) {
            loadOnScroll();
          }
        }}
        ref={scrollableRef}
      >
        {isScrollable && (
          <div className="h-110 w-3 absolute text-[10px] min-[600px]:flex left-[49.1%] min-[790px]:left-[33.1%] hidden flex-col justify-between">
            <FaChevronUp />
            <FaChevronDown />
          </div>
        )}
        {isScrollable && (
          <div className="h-110 w-3 absolute min-[790px]:flex text-[10px] right-[33.05%] hidden flex-col justify-between text-wrap">
            <FaChevronUp />
            <FaChevronDown />
          </div>
        )}
        {displayCharacters.map((characterEdge, i) => {
          const { node, role } = characterEdge;
          const { dateOfBirth, age, image, name, id: charId } = node;
          const { day, month, year } = dateOfBirth;

          return (
            <Link
              href={`/${id}/${titleForUrl}/${charId}`}
              className="min-[600px]:h-29 min-[600px]:p-4 flex flex-col justify-between rounded-lg bg-white/20 p-2"
              key={i}
            >
              <div className="flex justify-between mb-2">
                <div className="flex gap-x-3 items-center">
                  <div className="min-[600px]:min-w-12 min-[600px]:h-12 min-w-9 h-9 relative overflow-clip text-[10px] rounded-full">
                    <Image
                      src={image.medium}
                      alt={`${name.full} image`}
                      fill
                      sizes="(>600px) 100vw"
                      className="object-cover"
                    ></Image>
                  </div>
                  <div>
                    <p className="min-[600px]:text-sm text-xs w-full">
                      {name.full}
                    </p>
                    <p className="min-[600px]:text-xs text-[10px] text-white/50 line-clamp-1">
                      {name.native}
                      {name.alternative.map((name) => ", " + name)}
                    </p>
                  </div>
                </div>
                <div className="min-[600px]:text-xs text-[10px] flex gap-1 items-center">
                  <FaCalendarDays />

                  <p className="">
                    {day && month && year
                      ? `${String(day).padStart(2, "0")}/${String(
                          month
                        ).padStart(2, "0")}/${year}`
                      : age}
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <p className="px-2 py-[1px] rounded-full min-[600px]:text-xs text-[10px] bg-accent-two/50">
                  {role.charAt(0) + role.slice(1, role.length).toLowerCase()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
