import React from "react";
import { Box, Button, Divider, Rating, Typography, Modal } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import SingleProduct from "../components/single/singleProduct/SingleProduct";
import ProductTabs from "../Ttabs";
const SingleShop = () => {
  const { loading, product, setRefrachCart, refrechCart } = useGlobalContext();
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const singleProduct = product.filter((item) => item.id.toString() === id);

  if (loading) {
    return <div>not found</div>;
  }

  if (!singleProduct.length) {
    return <div>loading...</div>;
  }
  document.getElementsByTagName(
    "title"
  )[0].textContent = `Miloudb | ${singleProduct[0].title}`;
  document.querySelectorAll("meta")[3].content = singleProduct[0].metaTitle;
  document.querySelectorAll("meta")[4].content =
    singleProduct[0].metaDescription;

  const addToLocalStorage = (id, url, title, price) => {
    if (localStorage.getItem("cart")) {
      const item = { id, url, title, price };
      const tempCart = JSON.parse(localStorage.getItem("cart"));
      const tempID = new Set(
        tempCart.map((item) => {
          return item.id;
        })
      );
      if (!tempID.has(id)) {
        tempCart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(tempCart));
      setRefrachCart(!refrechCart);
    } else {
      const item = { id, url, title, price };
      const tempCart = [item];
      localStorage.setItem("cart", JSON.stringify(tempCart));
      setRefrachCart(!refrechCart);
    }
  };
  return (
    <Box
      backgroundColor="#eee"
      padding="20px 360px"
      sx={{
        "@media(max-width:1790px)": {
          padding: "20px 346px",
        },
        "@media(max-width:1730px)": {
          padding: "20px 304px",
        },
        "@media(max-width:1630px)": {
          padding: "20px 255px",
        },
        "@media(max-width:1370px)": {
          padding: "20px 125px",
        },
        "@media(max-width:1230px)": {
          padding: "20px 61px",
        },
        "@media(max-width:1100px)": {
          padding: "20px 4px",
        },
        "@media(max-width:1000px)": {
          padding: "20px 9px",
        },
      }}
    >
      <Box
        width="100%"
        justifyContent="space-between"
        display="flex"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <Box
          width="49%"
          sx={{
            "@media(max-width:1000px)": {
              width: "100%",
            },
          }}
        >
          <img
            src={singleProduct[0].url}
            alt={singleProduct.title}
            style={{ borderRadius: "12px", border: "1px solid #ff000029" }}
          />
        </Box>
        <Box
          width="49%"
          sx={{
            "@media(max-width:1000px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "34px", fontWeight: "bold" }}
            padding="15px 12px"
          >
            {singleProduct[0].title}
          </Typography>
          <Box className="rating">
            <Rating
              name="text-feedback"
              value={5}
              readOnly
              sx={{ marginLeft: "12px" }}
            />
          </Box>
          <Typography
            sx={{
              width: "100%",

              fontSize: "23px",
              marginLeft: "15px",
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            {singleProduct[0].price} DA
          </Typography>
          <Typography
            sx={{
              width: "100%",

              fontSize: "17px",
              marginLeft: "15px",
              marginTop: "15px",
              color: "#666",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Vendor</span> : Boudjellal.M
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontSize: "17px",
              marginLeft: "15px",
              marginTop: "15px",
              color: "#666",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Category</span> :{" "}
            {singleProduct[0].category}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="25px"
          >
            <Button
              onClick={() =>
                addToLocalStorage(
                  singleProduct[0].id,
                  singleProduct[0].url,
                  singleProduct[0].title,
                  singleProduct[0].price
                )
              }
              variant="contained"
              sx={{
                width: "49%",
                marginTop: "20px",
                letterSpacing: "1px",
                background: "#e26414",

                padding: "6px 25px",
                fontSize: "17px",
                "&:hover": {
                  background: "#232323",
                },
              }}
            >
              add to cart
            </Button>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                width: "49%",
                marginTop: "20px",
                letterSpacing: "1px",
                background: "#e26414",

                padding: "6px 25px",
                fontSize: "17px",
                "&:hover": {
                  background: "#232323",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
          <Box marginTop="33px">
            {" "}
            <Box>
              <AiFillFacebook
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillInstagram
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillTwitterSquare
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillLinkedin
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "20px" }} />
      <Box margin="88px 0 40px" padding={0.5} borderRight="10px">
        <ProductTabs />
      </Box>

      <Divider />
      <Box>
        {" "}
        <Box
          backgroundColor="#eee"
          padding="20px 0px 50px 0px"
          sx={{
            "@media(max-width:1500px)": {
              padding: "20px 84px 50px 84px",
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
              You May Also Like
            </Typography>
          </Box>
          <Box width="100%" display="flex" gap="5px" flexWrap="wrap">
            {product
              .slice(1)
              .filter((item) => item.category === singleProduct[0].category)
              .map((item) => {
                return <SingleProduct key={item.id} {...item} />;
              })}
          </Box>
        </Box>
      </Box>
      <Box>
        {" "}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="15px"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Link to={`/shop/product/cod/${id}`} style={{ width: "49%" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  letterSpacing: "1px",
                  background: "#e26414",

                  padding: "8px 28px",
                  fontSize: "17px",
                  "&:hover": {
                    background: "#232323",
                  },
                }}
              >
                cash on delivery
              </Button>
            </Link>
            <Button
              variant="contained"
              sx={{
                width: "49%",
                marginTop: "20px",
                letterSpacing: "1px",
                background: "#e26414",
                padding: "8px 28px",
                fontSize: "17px",
                "&:hover": {
                  background: "#232323",
                },
              }}
              disabled={true}
            >
              Online payment
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default SingleShop;
