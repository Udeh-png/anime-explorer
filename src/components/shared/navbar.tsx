"use client";

import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiSearch } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="border-b border-b-gray-400 sticky top-0 h-18">
      <div className="max-w-7xl mx-auto flex items-center h-full min-[1090px]:justify-between justify-center">
        <div className="font-blanka text-3xl flex gap-x-2">
          <Image
            src={"/AE_Logo.png"}
            alt=""
            width={35}
            height={35}
            className="py-0.5"
          ></Image>
          <span className="leading-7">
            <span className="text-blue-400">ani</span>explorer
          </span>
        </div>

        <ul className="gap-x-10 min-[1090px]:flex hidden">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Browse</Link>
          </li>
          <li>
            <Link href={"/"}>Schedules</Link>
          </li>
          <li className="flex items-center group cursor-pointer">
            <p>Lists</p>
            <BiChevronDown className="group-hover:rotate-180 transition-transform" />
          </li>
        </ul>

        <div className="hidden gap-x-5 items-center min-[1090px]:flex">
          <div className="outline-0 bg-white text-black flex rounded-lg pl-5 items-center overflow-clip">
            <BiSearch className="text-gray-400" />
            <input
              type="text"
              className="mr-3 ml-1 outline-0 placeholder:text-gray-400"
              placeholder="Discover New Favorites..."
            />
            <button
              type="submit"
              className="px-2.5 py-2.5 block bg-blue-400 text-white"
            >
              <BiSearch />
            </button>
          </div>
          <Link href={"/login"}>Log In</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
