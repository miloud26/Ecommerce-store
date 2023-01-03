import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import contact from "../img/contact.webp";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Contact = () => {
  document.getElementsByTagName("title")[0].textContent = `Miloudb | Contact`;
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
        Contact
      </Typography>
      <Box
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
          <img src={contact} alt="cover Contact" />
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
              fontSize: "40px",
              display: "block",
              letterSpacing: "1.7px",
              fontWeight: "600",
              margin: "20px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "29px",
              },
            }}
          >
            GET IN TOUCH
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
            We'd Love to Hear From You, Lets Get In Touch!
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
            <Box
              marginRight={5}
              sx={{
                "@media(max-width:600px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Additional Information
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                  "@media(max-width:700px)": {
                    width: "100%",
                  },
                }}
              >
                We are open: Monday - Saturday, <br />
                10AM - 5PM and closed on sunday <br /> sorry for that.
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

          <Box>
            <Typography
              sx={{
                color: "#666666",
                fontSize: "16px",
                display: "block",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Social
            </Typography>
            <Box width="100%" display="flex" gap="20" alignItems="center">
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

      <Box width="100%" height={"800px"} margin="70px 0">
        <Box width="100%" height={"100%"}>
          <iframe
            title="map"
            style={{ width: "100%", height: "100%" }}
            src="https://maps.google.com/maps?q=Lyc%C3%A8e%20Hamza%20ibn%20abd%20El%20Motalib&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </Box>
      </Box>
      <Box
        padding="0px 200px"
        width="100%"
        margin="100px 0"
        sx={{
          "@media(max-width:800px)": {
            padding: "0px 40px",
          },
        }}
      >
        <form style={{ width: "100%" }}>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {" "}
            <TextField
              label="First Name*"
              type="text"
              name="name1"
              sx={{
                display: "block",
                width: "48%",
                marginBottom: "10px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
            <TextField
              label="Last Name*"
              type="text"
              name="name2"
              sx={{
                display: "block",
                width: "48%",
                marginBottom: "10px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
          </Box>

          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {" "}
            <TextField
              label="Phone Number*"
              type="text"
              name="number"
              sx={{
                display: "block",
                width: "48%",
                marginBottom: "10px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
            <TextField
              label="Email*"
              type="email"
              name="name2"
              sx={{
                display: "block",
                width: "48%",
                marginBottom: "10px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
          </Box>
          <Box>
            <textarea className="textArea" placeholder="You're Message..." />
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            marginTop={1}
          >
            {" "}
            <Button
              variant="contained"
              sx={{
                background: "#e26414",
                fontWeight: "bold",
                fontSize: "19px",
                letterSpacing: "1.8px",
                "&:hover": {
                  background: "red",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
