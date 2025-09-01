"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { IoPersonCircle } from "react-icons/io5";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-5 h-[clamp(20px,10vw,80px)] min-[881px]:w-[80%] rounded-xl flex items-center bg-[rgba(255,255,255,0.1)] mx-auto justify-end">
      <div className="md:grid flex justify-between md:grid-cols-[4fr_5fr_4fr] w-full mx-auto items-center md:yo:p-0 px-2">
        <div
          className="font-extrabold text-[clamp(14px,3vw,24px)]"
          style={{
            background:
              "linear-gradient(to right, var(--accent-one), var(--accent-two))",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Link href={"/"}>Anime Explorer</Link>
        </div>

        <div className="flex justify-center gap-[clamp(8px,3vw,60px)] font-light text-[clamp(10px,2vw,16px)]">
          <Link
            href={"/"}
            className={`relative ${pathname === "/" ? "nav-link" : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/Schedule"}
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

        <div className="flex justify-center">
          <div className="flex md:justify-around md:w-[70%]">
            <Link href={"/user-profile"} className="font-semibold flex">
              <IoPersonCircle className="text-2xl" />
              <span className="hidden md:block">Profile</span>
            </Link>

            <Link
              href={"/search"}
              className="font-semibold flex ml-1 min-[970px]:m-0"
            >
              <BiSearch className="text-2xl" />
              <span className="hidden md:block">Search</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
