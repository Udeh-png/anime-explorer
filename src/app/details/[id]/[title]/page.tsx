import { getMediaWithId } from "@/queries";
import Image from "next/image";
// import { useState } from "react";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { bannerImage, coverImage } = await getMediaWithId(Number(id));

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-80 hidden md:block">
        <Image
          src={bannerImage}
          alt=""
          aria-label=""
          fill
          sizes=""
          className="object-cover"
        />
      </div>
      <div className="md:hidden block absolute top-0 left-0 w-full h-[65vh]">
        <Image
          src={coverImage.extraLarge}
          alt=""
          aria-label=""
          fill
          sizes=""
          className="object-cover"
        />
      </div>

      <div className="h-screen rounded-3xl bg-black relative md:translate-y-80 translate-y-119 pb-1000"></div>
    </div>
  );
}
