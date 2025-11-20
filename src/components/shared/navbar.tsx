import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiSearch } from "react-icons/bi";

export function Navbar() {
  return (
    <div className="">
      <div className="h-14 bg-background flex items-center px-4 justify-between">
        <div className="flex gap-x-1">
          <Image src={"/AE_Logo.svg"} alt="" width={25} height={25} />
          <p className="font-blanka text-xl tracking-widest pb-[2px]">
            <span className="text-accent-one">Ani</span>Explorer
          </p>
        </div>

        <div className="flex gap-x-10">
          <ul className="contents">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Schedules</Link>
            </li>
            <li>
              <Link href={"/"}>Browse</Link>
            </li>
            <li className="flex items-center group cursor-pointer">
              <p>Lists</p>
              <BiChevronDown className="group-hover:rotate-180 transition-transform" />
            </li>
          </ul>
        </div>

        <div className="flex gap-x-3 items-center">
          <BiSearch className="text-2xl cursor-pointer" />
          <Link href={"/"} className="px-5 py-1">
            Log In
          </Link>
          <Link href={"/"} className="px-5 py-1 bg-accent-one">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
