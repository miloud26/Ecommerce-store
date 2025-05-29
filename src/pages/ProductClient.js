import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";

const ProductClient = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  const [couponCode, setCouponCode] = useState(false);
  const [validCoupon, setValidCoupon] = useState("");
  const [coupon, setCoupon] = useState("");
  const [orderSuccus, setOrderSuccus] = useState(false);

  const { loading, coupons, product } = useGlobalContext();
  const couponSelected = coupons.filter(
    (item) => parseInt(item.ProductId) === parseInt(id)
  );
  /*  console.log(couponSelected);
  useEffect(() => {
    getSingleProduct(id);
  }, []); */

  const singleProduct = product.filter((item) => item.id === id);

  if (loading) {
    return <div>not found</div>;
  }
  if (!singleProduct.length) {
    return <div>loading...</div>;
  }

  const handleCoupon = () => {
    const dateNow = new Date().getTime();
    if (
      !coupon ||
      couponSelected[0].code !== coupon ||
      (couponSelected[0].dateOne <= dateNow &&
        dateNow >= couponSelected[0].dateTwo)
    ) {
      setValidCoupon("error");
      setTimeout(() => {
        setValidCoupon("");
      }, 3000);
    } else {
      setValidCoupon("seccus");
    }
  };

  document.getElementsByTagName(
    "title"
  )[0].textContent = `Miloudb | ${singleProduct[0].title}`;
  document.querySelectorAll("meta")[3].content = singleProduct[0].metaTitle;
  document.querySelectorAll("meta")[4].content =
    singleProduct[0].metaDescription;

  const handleOrder = async () => {
    /*  try {
        await fetch("http://localhost:1337/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name: name,
              phone: phone,
              state: state,
              city: city,
              shipping: singleProduct[0].shipping,
              productName: singleProduct[0].title,
              url: singleProduct[0].url,
              quantity: quantity,
              price:
                validCoupon === "seccus"
                  ? +singleProduct[0].price -
                    +singleProduct[0].price * (couponSelected[0].discount / 100)
                  : +singleProduct[0].price,
            },
          }),
        });
      } catch (error) {
        console.log(error);
      }
      const form = document.getElementById("form");
      const formData = new FormData(form);
      fetch(
        "https://script.google.com/macros/s/AKfycbzQbFTP6skS94MEIlOgdG_ARydlmcewUWznRt_A4l8eSS1RkkVD18lJF-tjeycTZdppEw/exec",
        {
          method: "POST",
          body: formData,
        }
      );*/

    setOrderSuccus(!orderSuccus);
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
      {" "}
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
          <Typography
            sx={{
              width: "100%",
              fontSize: "17px",
              marginLeft: "15px",
              color: "#666",
              marginTop: "39px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Quantity</span>
          </Typography>
          <Box
            width="115px"
            height="41px"
            border="1px #787878 solid"
            marginLeft="15px"
            borderRadius="3px"
            display="flex"
            justifyContent="space-around"
            padding="2px 0"
            marginTop="9px"
          >
            <Box
              onClick={() => setQuantity(quantity + 1)}
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ cursor: "pointer" }}
            >
              +
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              {quantity}
            </Box>
            <Box
              onClick={() => {
                if (quantity === 1) {
                  setQuantity(1);
                } else {
                  setQuantity(quantity - 1);
                }
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              sx={{ cursor: "pointer" }}
            >
              -
            </Box>
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="20px"
          >
            <Button
              variant="contained"
              sx={{
                width: "90%",
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
              add information bellow
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "25px 0" }} />
      <Box
        width="100%"
        padding="25px"
        border="5px solid #ffffff"
        borderRadius={4}
      >
        <Box width="100%">
          <Typography
            sx={{ textAlign: "center", padding: "25px 0", fontSize: "28px" }}
          >
            To order, enter the information here below
          </Typography>
        </Box>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: "100%", padding: "" }}
        >
          <Box
            widt="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={3}
            flexWrap="wrap"
          >
            <TextField
              sx={{
                width: "48%",
                marginTop: "20px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              label="Enter Your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              sx={{
                width: "48%",
                marginTop: "20px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              label="Enter Your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box
            widt="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={3}
            flexWrap="wrap"
          >
            <TextField
              sx={{
                width: "48%",
                marginTop: "20px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              label="Enter Your State"
              onChange={(e) => setState(e.target.value)}
            />
            <TextField
              sx={{
                width: "48%",
                marginTop: "20px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              label="Enter Your City"
              onChange={(e) => setCity(e.target.value)}
            />
            <Box marginTop={2}>
              <Button
                onClick={() => setCouponCode(!couponCode)}
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
                apply coupon code
              </Button>
              {couponCode && (
                <Box>
                  {validCoupon === "seccus" ? (
                    <Box
                      marginTop={2}
                      marginLeft={2}
                      sx={{ fontWeight: "bold" }}
                    >
                      {couponSelected[0].code}{" "}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        marginTop: "16px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <TextField
                        label="Enter coupon code"
                        onChange={(e) => setCoupon(e.target.value)}
                      />
                      <Button
                        onClick={handleCoupon}
                        variant="contained"
                        sx={{
                          letterSpacing: "1px",
                          background: "#e26414",

                          padding: "8px 28px",
                          fontSize: "17px",
                          "&:hover": {
                            background: "#232323",
                          },
                        }}
                      >
                        apply
                      </Button>

                      {validCoupon === "error" && (
                        <Box width="100%" sx={{ color: "red" }}>
                          In Valid Coupon Code
                        </Box>
                      )}
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </Box>
          <Box
            widt="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              type="submit"
              onClick={handleOpen}
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
              order NOW
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              "@media(max-width:700px)": {
                width: "100%",
              },
            }}
          >
            {orderSuccus ? (
              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Your order has been accepted
                  </Typography>
                </Box>
                <Box
                  widt="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link to="/shop" style={{ width: "100%" }}>
                    {" "}
                    <Button
                      onClick={handleClose}
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
                      ok
                    </Button>
                  </Link>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box>
                  <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                    Client Information
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "20px" }}>
                    Full Name : {name}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "20px" }}>
                    Phone Number : {phone}{" "}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "20px" }}>
                    State : {state}
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontSize: "20px" }}>
                    City : {city}
                  </Typography>
                </Box>
                <Divider sx={{ margin: "12px 0" }} />
                <Box>
                  <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                    Product Information
                  </Typography>
                  <Box
                    display="flex"
                    width="100%"
                    marginTop="12px"
                    alignItems="flex-start"
                  >
                    <Box
                      width="100px"
                      height="100px"
                      border="1px #ff000047 solid"
                      marginRight={1}
                    >
                      <img
                        src={singleProduct[0].url}
                        alt={singleProduct[0].title}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ marginBottom: "6px" }}>
                        {singleProduct[0].title.slice(0, 22)} . . .
                      </Typography>
                      <Typography sx={{ marginBottom: "6px" }}>
                        {singleProduct[0].price} DA
                      </Typography>
                      <Typography sx={{ marginBottom: "6px" }}>
                        Shipping : {`${singleProduct[0].shipping}`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ margin: "12px 0" }} />
                <Box>
                  <Typography sx={{ marginBottom: "6px", fontSize: "22px" }}>
                    Total Price :{" "}
                    {validCoupon === "seccus"
                      ? +singleProduct[0].shipping +
                        (+singleProduct[0].price -
                          (singleProduct[0].price * 50) / 100) *
                          quantity
                      : +singleProduct[0].shipping +
                        +singleProduct[0].price * quantity}
                    DA
                  </Typography>
                </Box>
                <Box
                  widt="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    onClick={handleOrder}
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
                    order NOW
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Box>
      <Box height={0} overflow="hidden">
        <form id="form">
          <input type="text" value={new Date().getTime()} name="id" />
          <input
            type="text"
            value={moment(new Date()).format("DD--MM--YYYY")}
            name="create_at"
          />
          <input type="text" value={name} name="name" />
          <input type="text" value={phone} name="phone" />
          <input type="text" value={state} name="state" />
          <input type="text" value={city} name="city" />
          <input type="text" value={quantity} name="quantity" />
          <input
            type="text"
            value={
              validCoupon === "seccus"
                ? +singleProduct[0].shipping +
                  +singleProduct[0].price -
                  (+singleProduct[0].shipping + +singleProduct[0].price) *
                    (couponSelected[0].discount / 100)
                : +singleProduct[0].shipping + +singleProduct[0].price
            }
            name="price"
          />
        </form>
      </Box>
    </Box>
  );
};

export default ProductClient;
