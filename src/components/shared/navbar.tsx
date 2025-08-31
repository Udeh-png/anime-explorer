"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { IoPersonCircle } from "react-icons/io5";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-5 h-20 w-[80%] rounded-xl flex items-center bg-[rgba(255,255,255,0.1)] mx-auto">
      <div className="grid grid-cols-[4fr_5fr_4fr] w-[80%] mx-auto items-center">
        <div
          className="font-extrabold text-2xl"
          style={{
            background:
              "linear-gradient(to right, var(--accent-one), var(--accent-two))",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Link href={"/"}>Anime Explorer</Link>
        </div>

        <div className="flex justify-center gap-15 font-light">
          <Link
            href={"/"}
            className={`relative ${pathname === "/" ? "nav-link" : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className={`relative ${pathname === "page" ? "nav-link" : ""}`}
          >
            Page
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
          <div className="flex justify-between w-[70%]">
            <Link href={"/user-profile"} className="font-semibold flex gap-x-2">
              <IoPersonCircle className="text-2xl" />
              <span>Profile</span>
            </Link>

            <Link href={"/search"} className="font-semibold flex gap-x-2">
              <BiSearch className="text-2xl" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
