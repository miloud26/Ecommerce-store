import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { useGlobalContext } from "../../../Context";
import "./singleProduct.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
const SingleProduct = ({ id, url, title, price }) => {
  const { refrechCart, setRefrachCart } = useGlobalContext();
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
      width="24%"
      className="parent"
      sx={{
        marginBottom: "60px",
        "@media(max-width:1200px)": {
          width: "49%",
        },
        "@media(max-width:900px)": {
          width: "100%",
        },
      }}
    >
      <Box className="box-img" position="relative">
        <img src={url} alt={title} />
        <Box className="rating">
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            sx={{ color: "#a5fa00" }}
          />
        </Box>
      </Box>
      <Box marginTop={1} position="relative">
        <Box>
          <Typography
            sx={{ width: "100%", textAlign: "center", fontSize: "18px" }}
          >
            {title.slice(0, 30)}
          </Typography>
          <Typography
            className="price"
            sx={{
              width: "100%",
              textAlign: "center",
              marginTop: "5px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {price} DA
          </Typography>
        </Box>
        <Box
          position="absolute"
          bottom="-20px"
          left="50%"
          className="cart"
          display="flex"
          gap="16px"
          justifyContent="center"
        >
          <Link to={`/shop/product/${id}`}>
            <Box
              width="40px"
              height="40px"
              borderRadius="50%"
              border="1px solid #e26414"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#e26414"
              marginRight={1}
            >
              <VisibilityOutlinedIcon
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Link>
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            border="1px solid #e26414"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#e26414"
          >
            <ShoppingCartOutlinedIcon
              onClick={() => addToLocalStorage(id, url, title, price)}
              style={{
                display: "block",
                color: "white",
                fontSize: "25px",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
