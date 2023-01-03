import React from "react";
import { useGlobalContext } from "./Context";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SingleShop from "./pages/SingleShop";
import Error from "./pages/Error";
import ProductClient from "./pages/ProductClient";
import { Box } from "@mui/material";
import ProductCart from "./components/single/ProductCart";
const App = () => {
  const { showCart, cart } = useGlobalContext();

  React.useEffect(() => {
    const getPixel = async () => {
      /* const data = await fetch("http://localhost:1337/api/pixels/1", {
        method: "GET",
      });
      const pixelDate = await data.json();
      const { pixel } = pixelDate.data.attributes; */

      document.querySelector(
        "head #script"
      ).textContent = `!(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", '509928037861636');
      fbq("track", "PageView");
      fbq("track", "lead");`;
      document.querySelector("head #noscript").textContent = `<img
      height="1"
      width="1"
      style="display: none"
      src="https://www.facebook.com/tr?id=509928037861636&ev=PageView&noscript=1"
  />`;
    };
    getPixel();
  }, []);
  return (
    <Box className={showCart ? "showCart" : ""} sx={{ transition: "0.8s" }}>
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<SingleShop />} />
            <Route path="/shop/product/cod/:id" element={<ProductClient />} />
            <Route path="*" exact element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      <Box
        sx={{
          transition: "0.8s",
          width: "552px",
          height: `89%`,
          backgroundColor: "#eee",
          position: "fixed",
          top: "98px",
          right: showCart ? "7px" : "-50%",
          zIndex:
            "999999999999999999999999999999999999999999999999999999999999999999999999",
          padding: "35px",
          overflowY: "auto",
          "@media(max-width:1200px)": {
            display: "none",
          },
        }}
      >
        {" "}
        {cart?.map((item) => {
          return <ProductCart key={item.id} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default App;
