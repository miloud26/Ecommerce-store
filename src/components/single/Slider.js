import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Img1 from "../../img/pc1.jpg";
import Img2 from "../../img/pc2.jpg";
import Img3 from "../../img/bfp.jpg";

const Slider = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          waitForTransition: true,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Box width="100%" height="100%">
            <img src={Img3} alt="" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box width="100%" height="100%">
            <img src={Img2} alt="" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
