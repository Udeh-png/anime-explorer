import { getTenTrending } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { MiniCarousel } from "@/components/home/MiniCarousel";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { PageObject } from "@/types";

export default async function Home() {
  let pageObject: PageObject = await getTenTrending();

  return (
    <div>
      <Hero />
      <MiniCarousel pageObject={pageObject} />
    </div>
  );
}
