"use client";

import { ToggleButton } from "@/components/shared/ToggleButton";
import { Media } from "@/types";
import Link from "next/link";
import { useRef, useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";

export const Episodes = ({ media }: { media: Media }) => {
  const { streamingEpisodes } = media;
  const ascendingOrder = [...streamingEpisodes].reverse();
  const [episodesOrder, setEpisodesOrder] = useState(ascendingOrder);

  return streamingEpisodes.length > 0 ? (
    <div>
      <div className="flex">
        <div>
          <p className="min-[600px]:text-2xl text-base font-semibold min-[600px]:mb-2 mb-1">
            Episodes
          </p>
        </div>

        <div className="flex w-full justify-end items-center gap-x-1 min-[600px]:text-sm text-xs">
          <p>Asc</p>
          <ToggleButton
            handleToggle={(e) => {
              if (e.target.checked) {
                setEpisodesOrder(streamingEpisodes);
                return;
              }
              setEpisodesOrder(ascendingOrder);
            }}
          />
          <p>Desc</p>
        </div>
      </div>

      <div className="relative flex gap-2 overflow-auto scrollable">
        {episodesOrder.map((episode, i) => {
          const { thumbnail, title, url } = episode;

          return (
            <Link href={url} key={i}>
              <div
                className="relative min-[600px]:w-70 min-[600px]:h-40 w-45 h-25 flex items-end p-2 rounded"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CgPlayButton className="absolute text-6xl top-1/2 left-1/2 -translate-1/2" />
                <p className="min-[600px]:text-sm text-[10px] line-clamp-2">
                  {title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : null;
};
