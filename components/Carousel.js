import { Player, Controls } from "@lottiefiles/react-lottie-player";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import {
  Button,
  Text,
  Input,
  Mail,
  Password,
  Row,
  Checkbox,
  Modal,
} from "@nextui-org/react";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
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
        <div className="w-full h-96 flex flex-col justify-around items-center bg-carousel-1 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/34603-magic-particles.json"
            style={{ height: "300px", width: "300px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          <Button auto color="gradient" onClick={handler}>
            Preview Script
          </Button>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width={800}
          >
            <Modal.Header className="flex flex-col">
              <Text id="modal-title" size={18}>
                Here you become the champion with
              </Text>
              <Text b size={18}>
                TOIR ALPHA!
              </Text>
            </Modal.Header>
            <Modal.Body>
              <video autoPlay>
                <source src="/preview_adc.mp4" type="video/mp4" />
              </video>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-row items-center justify-center mt-6">
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-2 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/34603-magic-particles.json"
            style={{ height: "300px", width: "300px" }}
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
        <div className="w-full h-96 flex flex-col justify-between items-center bg-carousel-3 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/34603-magic-particles.json"
            style={{ height: "300px", width: "300px" }}
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
        <div className="w-full h-96 flex flex-col justify-center items-center bg-carousel-4 bg-center bg-contain bg-no-repeat">
          <Player
            autoplay
            loop
            src="/34603-magic-particles.json"
            style={{ height: "300px", width: "300px" }}
            className="pointer-events-none"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
