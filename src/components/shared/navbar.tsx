import Image from "next/image";
import Link from "next/link";
import { BiMenu, BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export function Navbar() {
  return (
    <div className="">
      <div className="h-14 bg-[rgb(25,25,25)] flex items-center px-4 justify-between text-white/80">
        <div className="flex md:gap-x-1 gap-x-7 items-center">
          <BiMenu className="md:hidden block text-3xl" />
          <Image src={"/AE_Logo.svg"} alt="" width={25} height={25} />
          <p className="font-blanka text-xl tracking-widest pb-[2px] hidden md:inline-block text-white">
            <span className="text-accent-one">Ani</span>Explorer
          </p>
        </div>

        <div className="gap-x-10 md:flex hidden">
          <ul className="contents">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Schedules</Link>
            </li>
            <li className="flex items-center group cursor-pointer gap-x-2">
              <p>Browse</p>
              <IoMdArrowDropdown className="text-lg" />
            </li>
          </ul>
        </div>

        <div className="flex md:gap-x-10 gap-x-7 items-center">
          <BiSearch className="text-[1.6rem] cursor-pointer" />
          <div className="flex items-center gap-x-2 cursor-pointer">
            <MdAccountCircle className="text-[2rem]" />
            <IoMdArrowDropdown className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
