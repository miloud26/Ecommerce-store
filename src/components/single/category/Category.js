import React from "react";
import "./category.scss";
import { Box, Typography, Button } from "@mui/material";
const Category = ({ title, desc, discount, img }) => {
  return (
    <Box
      className="category"
      position="relative"
      sx={{
        "@media(max-width:600px)": {
          marginBottom: "15px",
        },
      }}
    >
      <Box>
        <img src={img} alt="category" />
      </Box>
      <Box
        position="absolute"
        top="120px"
        right="100px"
        zIndex={12}
        sx={{
          "@media(max-width:1500px)": {
            top: "36px",
            right: "44px",
          },
          "@media(max-width:800px)": {
            top: "50px",

            left: "20px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#f4cc9a",
            textTransform: "uppercase",

            letterSpacing: "1.8px",
            marginBottom: "7px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "23px",
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: "1.8px",
            marginBottom: "15px",
          }}
        >
          {desc}
        </Typography>
        <Typography
          sx={{
            border: "1px solid #eeeeeea6",
            padding: "4px 10px",
            fontSize: "17px",
            color: "#a59090",
            letterSpacing: "1.8px",
            marginBottom: "15px",
            width: "fit-content",
          }}
        >
          SAVE UP TO {discount}% OFF
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "#c76f38f2",
            fontWeight: "bold",
            "&:hover": {
              background: "#c76f38f2",
            },
          }}
        >
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default Category;
