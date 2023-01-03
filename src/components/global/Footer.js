import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Logo from "../../img/logo.png";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      width="100%"
      backgroundColor="#fbfbf1"
      padding="0px 150px"
      sx={{
        "@media(max-width:1200px)": {
          padding: "26px 110px",
        },
        "@media(max-width:800px)": {
          padding: "26px 20px",
        },
      }}
    >
      <Box padding="25px">
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box
            width="24%"
            sx={{
              "@media(max-width:1200px)": {
                width: "48%",
                marginBottom: "70px",
              },
              "@media(max-width:800px)": {
                width: "100%",
                display: "flex",
                marginBottom: "70px",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Box
              width="200px"
              marginBottom={3}
              sx={{
                "@media(max-width:800px)": {
                  width: "150px",
                },
              }}
            >
              <img src={Logo} alt="logo" />
            </Box>
            <Box marginBottom={3}>
              <Typography
                sx={{
                  textAlign: "start",
                  width: "100%",
                  paddingRight: "55px",
                  fontSize: "14px",
                  "@media(max-width:800px)": {
                    paddingRight: "0px",
                    width: "100%",
                    textAlign: "center",
                  },
                }}
              >
                Sit amet conse ctetur adipisicing elit, sed doe eiusmod tempor
                incididunt ut laborea
              </Typography>
            </Box>
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
            width="24%"
            sx={{
              "@media(max-width:1200px)": {
                width: "48%",
                marginBottom: "70px",
                paddingLeft: "40px",
              },
              "@media(max-width:800px)": {
                width: "100%",
                display: "flex",
                paddingLeft: "0px",
                marginBottom: "70px",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <ul>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Links
              </h2>
              <Link to="/">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Home
                </li>
              </Link>
              <Link to="/shop">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Shop
                </li>
              </Link>
              <Link to="/about">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </Box>
          <Box
            width="24%"
            sx={{
              "@media(max-width:1200px)": {
                width: "48%",
              },
              "@media(max-width:800px)": {
                width: "100%",
                display: "flex",
                marginBottom: "70px",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <ul>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Company
              </h2>
              <Link to="#">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  New Products
                </li>
              </Link>
              <Link to="#">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Personal Info
                </li>
              </Link>
              <Link to="#">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Address
                </li>
              </Link>
              <Link to="#">
                <li
                  style={{
                    fontSize: "14px",
                    paddingBottom: "15px",
                    transition: "0.5s",
                    color: "#232323",
                  }}
                >
                  Credit Slips
                </li>
              </Link>
            </ul>
          </Box>
          <Box
            width="24%"
            sx={{
              "@media(max-width:1200px)": {
                width: "48%",
              },
              "@media(max-width:800px)": {
                width: "100%",
                display: "flex",
                marginBottom: "70px",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            {" "}
            <Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                marginBottom={3}
              >
                <Box>
                  <MdLocationPin
                    style={{
                      color: "#e26414",
                      fontSize: "32px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
                <Box width="100%">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Location
                  </h2>
                  <p style={{ width: "312px" }}>
                    Ain Defla Khemis Miliana 44001
                  </p>
                </Box>
              </Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                marginBottom={3}
              >
                <Box>
                  <BsFillTelephoneFill
                    style={{
                      color: "#e26414",
                      fontSize: "32px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
                <Box width="100%">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Phone
                  </h2>
                  <p style={{ width: "312px" }}>+213777651022</p>
                </Box>
              </Box>
              <Box width="100%" display="flex" alignItems="center">
                <Box>
                  <IoMdMail
                    style={{
                      color: "#e26414",
                      fontSize: "32px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
                <Box width="100%">
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Email
                  </h2>
                  <p style={{ width: "312px" }}>miloud00@protonmail.com</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box padding="25px">
        <p style={{ width: "100%", textAlign: "center" }}>
          All Copiryght Reserved &copy; {new Date().getUTCFullYear()}
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
