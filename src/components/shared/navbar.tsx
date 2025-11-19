"use client";

import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="sticky top-0 md:h-16 h-13 z-50 bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center h-full min-[1090px]:justify-between justify-center">
        <div className="font-blanka min-[1090px]:text-3xl text-xl flex min-[1090px]:gap-x-2">
          <Image
            src={"/AE_Logo.png"}
            alt=""
            width={35}
            height={35}
            className="py-0.5 min-[1090px]:block hidden"
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
          <Link href={"/login"}>Log In</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
