import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import Slider from "../components/single/Slider";
import Category from "../components/single/category/Category";
import Img1 from "../img/phone1.webp";
import Img2 from "../img/pcc.webp";
import Img3 from "../img/sport.webp";
import Join from "../img/join.png";
import Rev from "../img/rev.jpg";
import { useGlobalContext } from "../Context";
import SingleProduct from "../components/single/singleProduct/SingleProduct";
import SwiperH from "../components/single/Swiper";
import Gallory from "../components/single/Galory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Home = () => {
  document.getElementsByTagName("title")[0].textContent = `Miloudb | Home`;
  const { product } = useGlobalContext();
  return (
    <Box>
      <Box>
        <Slider />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="20px 12px"
        backgroundColor="#eee"
        sx={{
          "@media(max-width:1200px)": {
            justifyContent: "space-around",
            rowGap: "15px",
          },
        }}
      >
        <Box
          width="33%"
          sx={{
            "@media(max-width:1200px)": {
              width: "49%",
            },
            "@media(max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Category
            img={Img1}
            title={"Phone"}
            desc={"latest phones"}
            discount={"30"}
          />
        </Box>
        <Box
          width="33%"
          sx={{
            "@media(max-width:1200px)": {
              width: "49%",
            },
            "@media(max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Category
            img={Img2}
            title={"Computer"}
            desc={"The best compilations"}
            discount={"50"}
          />
        </Box>
        <Box
          width="33%"
          sx={{
            "@media(max-width:1200px)": {
              width: "50%",
            },
            "@media(max-width:800px)": {
              width: "100%",
            },
          }}
        >
          <Category
            img={Img3}
            title={"Sport"}
            desc={"Latest Collection"}
            discount={"40"}
          />
        </Box>
      </Box>
      <Divider />
      <Box
        backgroundColor="#eee"
        padding="20px 200px 50px 200px"
        sx={{
          "@media(max-width:1500px)": {
            padding: "20px 84px 50px 84px",
          },
          "@media(max-width:1500px)": {
            padding: "20px 30px 50px 30px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "33px",
              fontWeight: "bold",
              width: "100%",
              padding: "40px",
              "@media(max-width:1500px)": {
                padding: "50px 10px",
                fontSize: "27px",
              },
            }}
          >
            Trending Products
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {product.slice(0, 4).map((item) => {
            return <SingleProduct key={item.id} {...item} />;
          })}
        </Box>
      </Box>
      <Divider />
      <Box
        backgroundColor="#eee"
        padding="20px 200px 50px 200px"
        sx={{
          "@media(max-width:1500px)": {
            padding: "20px 84px 50px 84px",
          },
          "@media(max-width:1500px)": {
            padding: "20px 30px 50px 30px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "33px",
              fontWeight: "bold",
              width: "100%",
              padding: "40px",
              "@media(max-width:1500px)": {
                padding: "50px 10px",
                fontSize: "27px",
              },
            }}
          >
            Special Product
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {product.slice(1, 5).map((item) => {
            return <SingleProduct key={item.id} {...item} />;
          })}
        </Box>
      </Box>
      <Divider />
      <Box
        backgroundColor="#eee"
        padding="20px 200px 50px 200px"
        sx={{
          "@media(max-width:1500px)": {
            padding: "20px 84px 50px 84px",
          },
          "@media(max-width:1500px)": {
            padding: "20px 30px 50px 30px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "33px",
              fontWeight: "bold",
              width: "100%",
              padding: "40px",
              "@media(max-width:1500px)": {
                padding: "50px 10px",
                fontSize: "27px",
              },
            }}
          >
            Deals Of The Day
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          {product.slice(1, 5).map((item) => {
            return <SingleProduct key={item.id} {...item} />;
          })}
        </Box>
      </Box>
      <Divider />
      <Box
        backgroundColor="#eee"
        height="250px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SwiperH />
      </Box>

      <Divider />
      <Box backgroundColor="#eee">
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "33px",
              fontWeight: "bold",
              width: "100%",
              padding: "40px",
              "@media(max-width:1500px)": {
                padding: "50px 10px",
                fontSize: "27px",
              },
            }}
          >
            Products Gallery
          </Typography>
        </Box>
        <Box
          height="405px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Gallory />
        </Box>
      </Box>

      <Divider />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        width="100%"
        backgroundColor="white"
        padding="40px 10px"
      >
        <Box
          width="49%"
          height="453px"
          backgroundColor="#eee"
          padding="12px 10px"
          borderRadius={2}
          sx={{
            "@media(max-width:1100px)": {
              width: "100%",
              marginBottom: "20px",
            },
            "@media(max-width:1000px)": {
              display: "none",
            },
            "@media(max-width:600px)": {
              height: "286px",
            },
          }}
        >
          <Box>
            {" "}
            <Typography
              sx={{
                marginBottom: "60px",
                textAlign: "center",
                fontSize: "33px",
                fontWeight: "bold",
                width: "100%",
                padding: "40px",
                "@media(max-width:1500px)": {
                  padding: "50px 10px",
                  fontSize: "27px",
                  marginBottom: "20px",
                },
                "@media(max-width:900px)": {
                  padding: "50px 6px",
                  fontSize: "24px",
                },
              }}
            >
              What people say about us
            </Typography>
          </Box>
          <Box>
            <Swiper
              spaceBetween={5}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                waitForTransition: true,
              }}
              pagination={true}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swpier-rev">
                <Box display="flex" gap={3} width="100%" alignItems="center">
                  {" "}
                  <Box>
                    <Avatar
                      src={Rev}
                      sx={{
                        marginRight: "12px",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Boudjellal Miloud
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#afa9a9",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam similique debitis nostrum repellendus vitae harum
                      fugit obcaecati sed ex in sint, hic impedit nemo! Eaque
                      sit commodi voluptatem dicta minima. Reprehenderit.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swpier-rev">
                <Box display="flex" gap={3} width="100%" alignItems="center">
                  {" "}
                  <Box>
                    <Avatar
                      src={Rev}
                      sx={{
                        marginRight: "12px",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Boudjellal Miloud
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#afa9a9",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam similique debitis nostrum repellendus vitae harum
                      fugit obcaecati sed ex in sint, hic impedit nemo! Eaque
                      sit commodi voluptatem dicta minima. Reprehenderit.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Box
          width="49%"
          height="453px"
          backgroundColor="#eee"
          padding="12px 10px"
          borderRadius={2}
          sx={{
            "@media(max-width:1100px)": {
              width: "100%",
            },
            "@media(max-width:600px)": {
              height: "285px",
            },
          }}
        >
          <Box>
            {" "}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "33px",
                fontWeight: "bold",
                width: "100%",
                padding: "40px",
                "@media(max-width:1500px)": {
                  padding: "50px 10px",
                  fontSize: "27px",
                },
                "@media(max-width:900px)": {
                  padding: "10px 6px",
                  fontSize: "24px",
                },
              }}
            >
              Newsletter
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            alignItems="center"
          >
            <Box>
              <img src={Join} alt="groupe manora" />
            </Box>
            <Box marginLeft={2}>
              {" "}
              <Typography
                sx={{
                  fontSize: "33px",
                  fontWeight: "bold",
                  width: "100%",
                  "@media(max-width:600px)": {
                    fontSize: "17px",
                  },
                }}
              >
                Join Our Maling List
              </Typography>
              <Typography
                sx={{
                  color: "#afa9a9",
                  fontSize: "17px",
                  width: "100%",
                  "@media(max-width:600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                News updates from Yunkid.No spam, we promise.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            alignItems="center"
            height="225px"
          >
            <form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              <input
                placeholder="Phone Number"
                type="text"
                style={{
                  width: "50%",
                  border: "none",
                  padding: "10px",
                  fontSize: "15px",
                }}
              />
              <button
                type="submit"
                style={{
                  border: "none",
                  padding: "10px 15px",
                  fontSize: "15px",
                  background: "#e26414",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
