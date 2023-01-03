import React, { useState } from "react";
import { Box, Badge } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { useGlobalContext } from "../../Context";
const Navbar = () => {
  const { showCart, setShowCart, cart } = useGlobalContext();
  const [nav, setNav] = useState(false);
  return (
    <Box
      borderBottom="3px white solid"
      className="navbar"
      width="100%"
      display="flex"
      alignItems={"center"}
      justifyContent="space-between"
      padding="26px 210px"
      backgroundColor="#eee"
      sx={{
        "@media(max-width:1200px)": {
          padding: "26px 110px",
        },
        "@media(max-width:800px)": {
          padding: "26px 20px",
        },
      }}
    >
      <Box
        width="30%"
        sx={{
          "@media(max-width:1200px)": {
            width: "40%",
          },
        }}
      >
        <Link to="/">
          <Box
            width="200px"
            sx={{
              "@media(max-width:800px)": {
                width: "150px",
              },
            }}
          >
            {" "}
            <img src={Logo} alt="logo" />
          </Box>
        </Link>
      </Box>
      <Box
        width="30%"
        sx={{
          "@media(max-width:1200px)": {
            width: "60%",
          },
          "@media(max-width:800px)": {
            display: `${nav ? "block" : "none"}`,
          },
        }}
      >
        <ul
          id={nav ? "links-mobile" : ""}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "26px",
          }}
        >
          <Link to="/">
            <li
              style={{
                fontSize: "20px",
                transition: "0.5s",
                color: "#232323",
              }}
              onClick={() => setNav(!nav)}
            >
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li
              style={{
                fontSize: "20px",
                transition: "0.5s",
                color: "#232323",
              }}
              onClick={() => setNav(!nav)}
            >
              Shop
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{
                fontSize: "20px",
                transition: "0.5s",
                color: "#232323",
              }}
              onClick={() => setNav(!nav)}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => setNav(!nav)}
              style={{
                fontSize: "20px",
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
        width="30%"
        position="relative"
        height="100%"
        sx={{
          "@media(max-width:1200px)": {
            display: "none",
          },
        }}
      >
        <ul
          style={{
            position: "absolute",
            right: "0",
            top: "-12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <li>
            <SearchOutlinedIcon
              sx={{
                transition: "0.5s",
                cursor: "pointer",
                fontSize: "30px",
                fontWeight: "300",
              }}
            />
          </li>
          <li>
            <PersonOutlineIcon
              sx={{
                transition: "0.5s",
                cursor: "pointer",
                fontSize: "30px",
                fontWeight: "300",
              }}
            />
          </li>
          <li onClick={() => setShowCart(!showCart)}>
            <Badge badgeContent={cart?.length} color="primary">
              <ShoppingCartOutlinedIcon
                sx={{
                  transition: "0.5s",
                  cursor: "pointer",
                  fontSize: "30px",
                  fontWeight: "300",
                }}
              />
            </Badge>
          </li>
        </ul>
      </Box>
      <Box
        display="none"
        sx={{
          cursor: "pointer",
          "@media(max-width:800px)": {
            display: "block",
          },
        }}
        onClick={() => setNav(!nav)}
      >
        <MenuIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
