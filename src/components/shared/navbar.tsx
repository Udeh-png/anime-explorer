"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import {
  IoMenuSharp,
  IoPersonCircle,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

export const Navbar = () => {
  const pathname = usePathname();
  const observedRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [menuClick, setMenuClick] = useState(false);
  const [navAnimate, setNavAnimate] = useState({});
  const [reached, setReached] = useState(false);
  useEffect(() => {
    if (observedRef.current && targetRef.current) {
      const observed = observedRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].intersectionRatio <= 0.4) {
            setNavAnimate({
              top: 40,
            });
            setReached(true);
            console.log("sup");
          } else if (entries[0].intersectionRatio >= 0.5) {
            setNavAnimate({
              top: 0,
            });
            setReached(false);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }
      );
      observer.observe(observed);
    }
  }, []);
  return (
    <nav className={`relative`}>
      <div
        className="absolute h-10 top-0 left-0 w-full"
        ref={observedRef}
      ></div>
      <motion.div
        className={`absolute flex justify-between max-w-[1200px] px-8 min-[614px]:h-20 h-14 items-center top-0 left-1/2 -translate-x-1/2 w-full z-10 transition-[width] duration-500 ${
          reached
            ? "fixed bg-[rgba(8,12,22,0.8)] rounded-full max-[992px]:w-[80%] max-[614px]:w-[95%]"
            : ""
        }`}
        ref={targetRef}
        animate={{ ...navAnimate }}
        transition={{ type: "tween" }}
      >
        <Link href={"/"}>
          <h1 className="min-[614px]:text-2xl font-bold bg-clip-text bg-linear-to-r from-accent-one to-accent-two text-transparent">
            Anime Explorer
          </h1>
        </Link>
        <ul className="flex gap-8 max-[992px]:hidden">
          <li className={pathname === "/" ? "relative nav-link" : ""}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={pathname === "/schedule" ? "relative nav-link" : ""}>
            <Link href={"/schedule"}>Schedule</Link>
          </li>
          <li className={pathname === "/favorites" ? "relative nav-link" : ""}>
            <Link href={"/favorites"}>Favorites</Link>
          </li>
        </ul>
        <div className="flex justify-center gap-x-10 max-[992px]:hidden">
          <div>
            <Link href={"/profile"}>Profile</Link>
          </div>
          <div>
            <Link href={"/search"}>Search</Link>
          </div>
        </div>

        <div className="text-2xl hidden max-[992px]:block">
          <IoMenuSharp
            className="cursor-pointer"
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          />
          <AnimatePresence>
            {menuClick && (
              <motion.div
                // key={"menu"}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className={`absolute w-60 py-4 text-lg rounded-2xl right-2 bg-[rgba(8,12,22,0.8)] z-10 `}
              >
                <ul className="flex flex-col px-3 text-[16px] gap-8">
                  <li className="flex gap-2">
                    <IoPersonCircleOutline className="text-2xl" />
                    <Link href={"/profile"}>Profile</Link>
                  </li>
                  <li>
                    <div className="relative overflow-clip w-full rounded-full border">
                      <input
                        type="text"
                        className="pl-3 w-[89%] min-[614px]:h-10 h-6 outline-0"
                        placeholder="Search"
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        value={search}
                      />
                      <FiX className="absolute right-2 min-[614px]:top-3 top-1" />
                    </div>
                    <div className="h-30 p-2 overflow-auto relative scrollable mt-3">
                      <ul className="flex flex-col gap-y-3 text-sm">
                        <li className="grid grid-cols-[1fr_5fr_1fr] grid-rows-[28px] items-center text-sm">
                          <div className="h-full"></div>
                          <div className="ml-2">Anima Name</div>
                          <div className="flex justify-center">
                            <MdFavoriteBorder className="w-[70%] h-[70%]" />
                          </div>
                        </li>
                      </ul>
                      {search && (
                        <Link
                          href={`/search?${search}`}
                          className="text-xs text-accent-one"
                        >
                          Show all results
                        </Link>
                      )}
                    </div>
                  </li>
                  <li
                    className={`flex justify-between items-center ${
                      pathname === "/" ? "relative nav-link" : ""
                    }`}
                  >
                    <Link href={"/"}>Home</Link>
                    <BiHome className="text-2xl" />
                  </li>
                  <li
                    className={`flex justify-between items-center ${
                      pathname === "/schedule" ? "relative nav-link" : ""
                    }`}
                  >
                    <Link href={"/schedule"}>Schedule</Link>
                    <AiOutlineSchedule className="text-2xl" />
                  </li>
                  <li
                    className={`flex justify-between items-center ${
                      pathname === "/favorites" ? "relative nav-link" : ""
                    }`}
                  >
                    <Link href={"/favorites"}>Favorites</Link>
                    <MdFavoriteBorder className="text-2xl" />
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
};
