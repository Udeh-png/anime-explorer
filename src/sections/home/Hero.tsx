"use client";

import { HeroSliderContent } from "@/components/home/slideContent";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper as Swipe, SwiperSlide } from "swiper/react";

export const Hero = () => {
  return (
    <div className="caret-transparent h-185">
      <Swipe
        className="h-full"
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1100}
        fadeEffect={{
          crossFade: true,
        }}
        loop
        pagination={{
          el: ".el",
          clickable: true,
          renderBullet: (index, className) => {
            console.log(className);

            return `
              <div class="${className} custom-bullet" data-index="${index}">
                <div class="bullet-progress"></div>
              </div>
            `;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: true,
          addIcons: true,
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
      >
        <SwiperSlide>
          <HeroSliderContent
            title="Gachiakuta"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse
          quae assumenda impedit odio velit hic magnam consequatur omnis,
          laboriosam libero laborum incidunt. Et ab optio similique iste
          inventore, nam suscipit voluptatem? Amet error voluptatem illo et ut,
          similique reprehenderit vero nostrum excepturi placeat est porro
          suscipit deserunt, quaerat assumenda?
        "
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSliderContent
            title="One Piece"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis sed repellendus nisi quo tempora cumque facere voluptatum doloremque, ipsum, fugit nostrum odit qui placeat inventore repellat eos temporibus delectus alias, modi ab deleniti. Ut sint nisi enim, placeat veniam modi quo vero cumque corrupti repudiandae id pariatur recusandae ipsum?"
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSliderContent
            title="Death Note"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima vero asperiores officiis fugit tempore. Dolorem impedit voluptatum ducimus aperiam delectus, eum corrupti nisi iure magnam modi magni enim placeat optio vero possimus architecto aliquid molestias minima itaque explicabo quibusdam? Minus aliquid quaerat, ex omnis pariatur quam molestiae at cumque."
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSliderContent
            title="Naruto"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequatur dignissimos neque ipsum, sed voluptatem enim corrupti porro! Nam nihil quia doloremque. Eum quis explicabo adipisci accusantium, iste soluta. Autem neque officiis asperiores facere nam obcaecati libero. Quibusdam alias neque possimus earum minima itaque placeat, laudantium inventore omnis fugit accusantium.
          "
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSliderContent
            title="Dandadan"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo perferendis odio autem, dolorem adipisci eaque sed quis quae repellendus sint, omnis impedit placeat nam dolorum. Odit quod commodi doloremque officiis cumque quae consequatur mollitia suscipit aliquam ipsum cupiditate soluta vero in esse quisquam, voluptatum quidem doloribus sequi maxime! Doloribus.
          "
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSliderContent
            title="Marshel"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis? Quis quo nostrum exercitationem placeat iure obcaecati repudiandae sint officiis suscipit, consectetur atque. Labore ipsam ducimus numquam aspernatur deleniti voluptate minus reiciendis veniam? Consequuntur tenetur incidunt numquam? Delectus nihil obcaecati accusantium labore? Voluptatem error quod, autem officia quis temporibus nemo?"
          />
        </SwiperSlide>

        <div className="w-15 absolute z-10 left-0 top-0 bottom-0 flex items-center justify-center text-5xl">
          <MdChevronLeft className="prevEl cursor-pointer absolute top-50" />
        </div>
        <div className="w-15 absolute z-10 right-0 top-0 bottom-0 flex items-center justify-center text-5xl">
          <MdChevronRight className="nextEl cursor-pointer absolute top-50" />
        </div>
        <div className="flex space-x-2! items-center mt-14 max-w-md pl-15 el absolute bottom-78 z-10"></div>
      </Swipe>
    </div>
  );
};
// movieName: the mummy
// h-185
