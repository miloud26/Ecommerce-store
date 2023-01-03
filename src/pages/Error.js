import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Box>
      <Box
        height="537px"
        padding="50px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          "@media(max-width:700px)": {
            padding: "10px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "43px",
            fontWeight: "bold",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Ooops !! Page Not Found .
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            sx={{
              background: "#e26414",
              fontWeight: "bold",
              fontSize: "22px",
              "&:hover": {
                background: "red",
              },
            }}
          >
            Back To Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Error;
