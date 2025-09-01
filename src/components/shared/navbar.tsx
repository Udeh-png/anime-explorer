"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMenuSharp, IoPersonCircle } from "react-icons/io5";
import { LuX } from "react-icons/lu";

const MobileNavbar = ({ pathname }: { pathname: string }) => {
  const [clickedMenu, setClickedMenu] = useState(false);
  function handleMenuClick() {
    setClickedMenu(!clickedMenu);
  }
  return (
    <div className="">
      <div onClick={handleMenuClick} className="ml-2 md:hidden">
        {clickedMenu ? (
          <div>
            <LuX className="text-2xl font-semibold" />
          </div>
        ) : (
          <div>
            <IoMenuSharp className="text-2xl" />
          </div>
        )}
      </div>

      <div
        className={`absolute right-10 px-2 w-[200px] h-50 rounded-xl gap-y-2 flex flex-col justify-between font-semibold opacity-0 transition-opacity shadow-[0_0_100px_8px_rgba(56,189,248,0.1))] bg-background ${
          clickedMenu
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <Link
          href={"/profile"}
          className={`relative rounded h-[50%] flex items-center w-full justify-start pl-2 ${
            pathname === "/profile" ? "nav-link" : ""
          }`}
        >
          <span>Profile</span>
        </Link>
        <Link
          href={"/"}
          className={`relative rounded h-[50%] flex items-center w-full justify-start pl-2 ${
            pathname === "/" ? "nav-link" : ""
          }`}
        >
          <span>Home</span>
        </Link>
        <Link
          href={"/schedule"}
          className={`relative rounded h-[50%] flex items-center w-full justify-start pl-2 ${
            pathname === "/schedule" ? "nav-link" : ""
          }`}
        >
          <span>Schedule</span>
        </Link>
        <Link
          href={"/favorites"}
          className={`relative rounded h-[50%] flex items-center w-full justify-start pl-2 ${
            pathname === "/favorites" ? "nav-link" : ""
          }`}
        >
          <span>Favorite</span>
        </Link>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="absolute left-1/2 top-10 -translate-x-1/2 h-[clamp(40px,6vw,80px)] w-[80%] rounded-xl flex items-center bg-[rgba(255,255,255,0.1)]">
      <div className="flex justify-between md:grid md:grid-cols-[4fr_5fr_4fr] w-[80%] mx-auto items-center">
        <div
          className="font-extrabold text-[clamp(18px,2vw,24px)]"
          style={{
            background:
              "linear-gradient(to right, var(--accent-one), var(--accent-two))",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Link href={"/"}>Anime Explorer</Link>
        </div>

        <div className="justify-center gap-15 font-light hidden md:flex">
          <Link
            href={"/"}
            className={`relative ${pathname === "/" ? "nav-link" : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/schedule"}
            className={`relative ${pathname === "page" ? "nav-link" : ""}`}
          >
            Schedule
          </Link>
          <Link
            href={"/favorites"}
            className={`relative ${
              pathname === "/favorites" ? "nav-link" : ""
            }`}
          >
            Favorites
          </Link>
        </div>

        <div className="flex justify-end">
          <div className="flex justify-between gap-x-2 items-center">
            <Link
              href={"/user-profile"}
              className="font-semibold gap-x-1 hidden md:flex"
            >
              <IoPersonCircle className="text-2xl" />
              <span className="hidden min-[1045px]:block">Profile</span>
            </Link>
            <Link href={"/search"} className="font-semibold flex gap-x-1">
              <BiSearch className="md:text-2xl text-xl" />
              <span className="hidden min-[1045px]:block">Search</span>
            </Link>

            <MobileNavbar pathname={pathname} />
          </div>
        </div>
      </div>
    </nav>
  );
};
