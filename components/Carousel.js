import { Player, Controls } from "@lottiefiles/react-lottie-player";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        type: "progressbar",
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="flex flex-row items-center justify-center mt-6">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-1 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/12766-arrow-animation.json"
            style={{ height: "200px", width: "200px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-1 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/12766-arrow-animation.json"
            style={{ height: "200px", width: "200px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-1 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/12766-arrow-animation.json"
            style={{ height: "200px", width: "200px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-1 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/12766-arrow-animation.json"
            style={{ height: "200px", width: "200px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
