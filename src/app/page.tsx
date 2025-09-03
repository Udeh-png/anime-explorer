import { Hero } from "@/sections/home/Hero";
import { TrendingNow } from "@/sections/home/TrendingNow";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

export default async function Home() {
  const query = `
    query {
      Page (perPage: 10) {
        media (type: ANIME, sort: TRENDING_DESC) {
          id
          trending
          title {
            english
            romaji
          }
        }
      }
    }
`;

  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };

  fetch(url, options)
    .then(async (res) => {
      return await res.json();
    })
    .then((data) => {
      // console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div>
      <Hero />
      <TrendingNow />
    </div>
  );
}
