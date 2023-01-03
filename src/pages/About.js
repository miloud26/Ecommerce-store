import React from "react";
import { Box, Typography, Button } from "@mui/material";
import img1 from "../img/about1.webp";
import img2 from "../img/about2.webp";
const About = () => {
  document.getElementsByTagName("title")[0].textContent = `Miloudb | About`;
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "33px",
          fontWeight: "bold",
          width: "100%",
          padding: "40px",
        }}
      >
        About Us
      </Typography>

      <Box
        marginBottom="70px"
        width="100%"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="10px 400px"
        sx={{
          "@media(max-width:1740px)": {
            padding: "10px 315px",
          },
          "@media(max-width:1500px)": {
            padding: "10px 205px",
          },
          "@media(max-width:1200px)": {
            padding: "10px 20px",
          },
        }}
      >
        <Box
          width="48%"
          sx={{
            cursor: "pointer",
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <img src={img1} alt="cover Contact" />
        </Box>
        <Box
          width="48%"
          sx={{
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              color: "#232323",
              fontSize: "30px",
              display: "block",
              letterSpacing: "1.7px",
              fontWeight: "600",
              margin: "20px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "20px",
              },
            }}
          >
            We Have Everything You Need ?
          </Typography>
          <Typography
            sx={{
              color: "#666666",
              fontSize: "17px",
              display: "block",
              letterSpacing: "1.7px",
              marginBottom: "35px",
            }}
          >
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit.
          </Typography>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box marginRight={5}>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                Ain Defla, Khemis Miliana 44001 <br /> Hay salam
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                +213777651022
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                miloud00@protonmail.com
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#e26414",
              fontWeight: "bold",
              "&:hover": {
                background: "red",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="row-reverse"
        alignItems="flex-start"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="10px 400px"
        sx={{
          "@media(max-width:1740px)": {
            padding: "10px 315px",
          },
          "@media(max-width:1500px)": {
            padding: "10px 205px",
          },
          "@media(max-width:1200px)": {
            padding: "10px 20px",
          },
        }}
      >
        <Box
          width="48%"
          sx={{
            cursor: "pointer",
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <img src={img2} alt="cover Contact" />
        </Box>
        <Box
          width="48%"
          sx={{
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              color: "#232323",
              fontSize: "30px",
              display: "block",
              letterSpacing: "1.7px",
              fontWeight: "600",
              margin: "20px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "20px",
              },
            }}
          >
            We Have Everything You Need ?
          </Typography>
          <Typography
            sx={{
              color: "#666666",
              fontSize: "17px",
              display: "block",
              letterSpacing: "1.7px",
              marginBottom: "35px",
            }}
          >
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit.
          </Typography>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box marginRight={5}>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                Ain Defla, Khemis Miliana 44001 <br /> Hay salam
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                +213777651022
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                miloud00@protonmail.com
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#e26414",
              fontWeight: "bold",
              "&:hover": {
                background: "red",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
