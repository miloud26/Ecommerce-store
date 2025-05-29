import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { imgs } from "../../data";
import { Box } from "@mui/material";
const SwiperH = () => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        height: "65px",
        width: "100%",
        padding: "0 170px",

        "@media(max-width:1500px)": {
          padding: "0 120px",
        },
      }}
    >
      <Swiper
        slidesPerView={6}
        spaceBetween={2}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imgs.map((item, index) => {
          return (
            <SwiperSlide key={index} className="slider-custom">
              <img src={item.url} alt="slider" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperH;
