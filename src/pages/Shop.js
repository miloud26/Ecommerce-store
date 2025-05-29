import {
  Box,
  Divider,
  Typography,
  Slider,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopImg from "../img/shop.jpg";
import { useGlobalContext } from "../Context";
import SingleProduct from "../components/single/singleProduct/SingleProduct";
const Shop = () => {
  document.getElementsByTagName("title")[0].textContent = `Miloudb | Shop`;
  const { category, product, setProduct } = useGlobalContext();
  const [categorySelected, setCategorySelected] = useState("");
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [termSearch, setTermSearch] = useState("");
  console.log(termSearch);
  const handleCategory = (name) => {
    setCategorySelected(name);
  };
  const [value, setValue] = React.useState([0, 100]);
  useEffect(() => {}, [page]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const displayAll = (e) => {
    e.preventDefault();
    window.location.pathname = "/shop";
  };
  /* useEffect(() => {
    const getItemsearch = () => {
      const tempData = product
        .slice(1)
        .filter((item) =>
          item.title.toUpperCase().startsWith(`${termSearch.toUpperCase()}`)
        );

      setProduct([{}, ...tempData]);
    };
    getItemsearch();
  }, [termSearch]); */

  const handleFilter = () => {
    setShowFilter(!showFilter);
    if (categorySelected) {
      const tempData = product
        .slice(1)
        .filter((item) => item.category === categorySelected)
        .filter(
          (item) =>
            item.price >= (value[0] * 30000) / 100 &&
            item.price <= (value[1] * 30000) / 100
        );

      setProduct([{}, ...tempData]);
    } else {
      const tempData = product
        .slice(1)
        .filter(
          (item) =>
            item.price >= (value[0] * 20000) / 100 &&
            item.price <= (value[1] * 20000) / 100
        );

      setProduct([{}, ...tempData]);
    }
  };
  return (
    <Box backgroundColor="#eee">
      <Box>
        <Box position="relative" width="100%">
          <Box width="100%" overflow="hidden" className="shop-banner">
            <img src={ShopImg} alt="img shop" />
          </Box>
        </Box>
        <Box className="shop-banner-title">
          <Typography
            sx={{
              marginBottom: "60px",
              fontSize: "60px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",

              color: "white",
              textTransform: "uppercase",
              letterSpacing: "2.5",
              "@media(max-width:1500px)": {
                fontSize: "50px",
              },
              "@media(max-width:1300px)": {
                fontSize: "40px",
              },
              "@media(max-width:1100px)": {
                fontSize: "30px",
              },
              "@media(max-width:1000px)": {
                display: "none",
              },
            }}
          >
            Start Shopping Now
          </Typography>
        </Box>
      </Box>

      <Box
        padding="60px 20px"
        display="flex"
        sx={{
          "@media(max-width:620px)": {
            transform: "translateX(00%)",
          },
        }}
        position="relative"
      >
        <Box
          width="400px"
          padding="10px 10px 20px 10px"
          backgroundColor="white"
          borderRadius={3}
          height="100%"
          position="sticky"
          top="115px"
          sx={{
            "@media(max-width:700px)": {
              position: "absolute",
              zIndex: "55",
              transition: "0.5s",
              left: `${showFilter ? "4px" : "-400px"}`,
              height: "850px",
              top: "86px",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                padding: "15px",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Filter By Price
            </Typography>
            <Divider />
            <Box
              display="flex"
              justifyContent="space-between"
              margin="20px 0 10px 0"
              padding="0 20px"
            >
              <Typography sx={{ fontSize: "19px" }}>
                {(value[0] * 20000) / 100} DA
              </Typography>

              <Typography sx={{ fontSize: "19px" }}>
                {(value[1] * 20000) / 100} DA
              </Typography>
            </Box>
            <Slider
              sx={{ color: "#e26414" }}
              value={value}
              onChange={handleChange}
            />
          </Box>
          <Box marginTop="70px">
            <Typography
              sx={{
                padding: "15px",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Filter By Category
            </Typography>
            <Divider />
            <Box
              display="flex"
              justifyContent="space-between"
              margin="20px 0 10px 0"
              padding="0 20px"
            >
              <FormGroup>
                {category.map((item) => {
                  const { name } = item;
                  return (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ position: "relative" }}
                    >
                      {" "}
                      <FormControlLabel
                        control={<Checkbox />}
                        label={name}
                        sx={{
                          marginBottom: "20px",
                        }}
                        onChange={() => handleCategory(name)}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "9px",
                          right: "-120px",
                        }}
                      >
                        (
                        {
                          product.filter((item) => item.category === name)
                            .length
                        }
                        )
                      </div>
                    </Box>
                  );
                })}
              </FormGroup>
            </Box>
          </Box>

          <Box marginTop={5} marginLeft="25px" onClick={handleFilter}>
            <Button
              variant="contained"
              sx={{
                letterSpacing: "6.8px",
                background: "#e26414",
                fontWeight: "bold",
                padding: "6px 25px",
                fontSize: "19px",
                "&:hover": {
                  background: "red",
                },
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>
        <Box
          padding={4}
          sx={{
            "@media(max-width:650px)": {
              padding: "20px 6px",
            },
          }}
          className="product-container"
        >
          <Box width={"100%"} marginBottom="50px">
            <form onSubmit={displayAll}>
              <TextField
                label="Search Product"
                sx={{ width: "100%" }}
                onChange={(e) => setTermSearch(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  letterSpacing: "1px",
                  background: "#e26414",
                  fontWeight: "bold",
                  padding: "6px 25px",
                  fontSize: "15px",
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                All Products
              </Button>
              <span onClick={() => setShowFilter(!showFilter)}>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    letterSpacing: "1px",
                    background: "#e26414",
                    fontWeight: "bold",
                    padding: "6px 25px",
                    fontSize: "15px",
                    "&:hover": {
                      background: "red",
                    },
                    display: "none",
                    "@media(max-width:700px)": {
                      display: "inline",
                      marginLeft: "15px",
                    },
                  }}
                >
                  Filter
                </Button>
              </span>
            </form>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            {product.length &&
              product.slice((page - 1) * 8 + 1, page * 8).map((item) => {
                return <SingleProduct key={item.id} {...item} />;
              })}
          </Box>
          {product.length <= 8 ? (
            ""
          ) : (
            <Box display="flex" justifyContent="center" marginTop="30px">
              <Pagination
                count={Math.floor((product.length - 1) / 8) + 1}
                onClick={(e) => setPage(parseInt(e.target.textContent))}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Shop;
