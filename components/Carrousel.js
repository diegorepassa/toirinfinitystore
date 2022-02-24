// import Swiper core and required modules
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

export default () => {
  return (
    <Swiper
      // install Swiper modules
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        type: "progressbar",
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="flex flex-row items-center justify-center mt-6 bg-blue">
        <div className="w-full h-96 bg-blue-gem flex flex-col justify-center items-center">
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6 bg-blue">
        <div className="w-full h-96 bg-blue-gem">
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6 bg-blue">
        <div className="w-full h-96 bg-blue-gem">
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6 bg-blue">
        <div className="w-full h-96 bg-blue-gem">
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
