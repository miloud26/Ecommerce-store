import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalContext } from "../../Context";
const ProductCart = ({ id, url, title, price }) => {
  const { setShowCart, refrechCart, setRefrachCart } = useGlobalContext();

  const deletFromLocalStorage = (id) => {
    const tempCart = JSON.parse(localStorage.getItem("cart")).filter(
      (item) => item.id !== id
    );
    localStorage.setItem("cart", JSON.stringify(tempCart));
    setRefrachCart(!refrechCart);
  };
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
      {" "}
      <Box marginBottom={4} display="flex" alignItems="center">
        <Box width="100px" height="100px" marginRight={3}>
          <img
            src={url}
            alt={title}
            style={{ borderRadius: "12px", border: "1px solid #333" }}
          />
        </Box>
        <Box>
          {" "}
          <Typography
            onClick={() => {
              window.location.pathname = `/shop/product/cod/${id}`;
              setShowCart(false);
            }}
            sx={{
              textAlign: "start",
              fontSize: "19px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {title?.slice(0, 32)}
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              color: "#666666",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {price} DA
          </Typography>
          <Button
            onClick={() => deletFromLocalStorage(id)}
            sx={{
              background: "#e26414",
              color: "white",
              padding: "2px 12px",
              "&:hover": {
                background: "#e26414",
                color: "white",
              },
            }}
          >
            remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCart;
