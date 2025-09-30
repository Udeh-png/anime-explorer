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
        className="grid min-[600px]:grid-cols-4 gap-3 grid-cols-2 max-h-110 overflow-auto scrollable justify-center pr-2"
        onScroll={() => {
          if (!isSearching) {
            loadOnScroll();
          }
        }}
        ref={scrollableRef}
      >
        {displayCharacters.map((characterEdge, i) => {
          const { node, role } = characterEdge;
          const { image, name, id: charId } = node;

          return (
            <Link
              href={`/${id}/${titleForUrl}/${charId}`}
              className="min-h-50 flex flex-col group"
              key={i}
            >
              <div className="w-full h-full overflow-clip rounded-lg mb-1">
                <div
                  className="w-full h-full group-hover:scale-105 transition-transform max-[345px]:bg-contain bg-cover"
                  style={{
                    backgroundImage: `url(${image.large})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="text-center text-sm">
                <p className="font-semibold line-clamp-1 group-hover:text-accent-two transition-colors">
                  {name.full}
                </p>
                <p className="text-white/50 text-xs">
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
