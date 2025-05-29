import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useGlobalContext } from "../../Context";
import { Box } from "@mui/material";

const Galory = () => {
  const { product } = useGlobalContext();
  return (
    <Box
      sx={{
        cursor: "pointer",
        height: "100%",
        width: "100%",
        padding: "0 60px 0 60px",
        "@media(max-width:600px)": {
          padding: "0 6px 0 6px",
        },
      }}
    >
      <Swiper
        className="swiperrr"
        slidesPerView={6}
        spaceBetween={-3}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
      >
        {product.slice(1).map((item) => {
          return (
            <SwiperSlide key={item.id} className="galory-class">
              <img src={item.url} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Galory;
