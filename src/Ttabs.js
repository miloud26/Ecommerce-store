import * as React from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { useGlobalContext } from "./Context";
import { useState } from "react";
function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductTabs = () => {
  const [value, setValue] = React.useState(0);
  const { singleProduct } = useGlobalContext();
  const [showAddRev, setShowAddRev] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {" "}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="DESCRIPTION"
              {...a11yProps(0)}
              onClick={() => {
                const div = document.createElement("div");
                div.innerHTML =
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.";

                document.getElementById("item-description").append(div);
              }}
            />
            <Tab label="REVIEWS" {...a11yProps(1)} />
            <Tab label="SHIPPING & RETURNS" {...a11yProps(2)} />
            <Tab label="CLIENT" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div id="item-description"></div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            {" "}
            <Box
              display="flex"
              justifyContent="space-between"
              padding="12px 0=15px"
              alignItems="center"
            >
              <Typography>No reviews yet</Typography>
              <Button
                onClick={() => setShowAddRev(!showAddRev)}
                variant="contained"
                sx={{
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
                add review
              </Button>
            </Box>
            {showAddRev && (
              <Box marginTop={2}>
                <Divider />
                <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
                  Write a review
                </Typography>
                <form onSubmit={(e) => e.preventDefault()}>
                  <TextField
                    label="Enter Your Name"
                    sx={{ width: "100%", marginTop: "15px" }}
                  />
                  <TextField
                    label="Enter Your Email"
                    sx={{ width: "100%", marginTop: "15px" }}
                  />
                  <TextField
                    label="Enter Rating By 5"
                    sx={{ width: "100%", marginTop: "15px" }}
                  />
                  <TextField
                    label="Enter Body of Review"
                    sx={{ width: "100%", marginTop: "15px" }}
                  />
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
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
                      sebmit review
                    </Button>
                  </Box>
                </form>
              </Box>
            )}
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box>
            <Box>
              {" "}
              <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
                Returns Policy
              </Typography>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We'll also pay the return shipping
                costs if the return is a result of our error (you received an
                incorrect or defective item, etc.). <br /> <br /> You should
                expect to receive your refund within four weeks of giving your
                package to the return shipper, however, in many cases you will
                receive a refund more quickly. This time period includes the
                transit time for us to receive your return from the shipper (5
                to 10 business days), <br /> <br /> the time it takes us to
                process your return once we receive it (3 to 5 business days),
                and the time it takes your bank to process our refund request (5
                to 10 business days). If you need to return an item, simply
                login to your account, view the order using the 'Complete
                Orders' link under the My Account menu and click the Return Item
                button. We'll notify you via e-mail of your refund once we've
                received and processed the returned item.
              </p>
            </Box>
            <Box>
              <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
                Shipping
              </Typography>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                We can ship to virtually any address in the world. Note that
                there are restrictions on some products, and some products
                cannot be shipped to international destinations. <br />
                <br /> When you place an order, we will estimate shipping and
                delivery dates for you based on the availability of your items
                and the shipping options you choose. Depending on the shipping
                provider you choose, shipping date estimates may appear on the
                shipping quotes page. <br />
                <br /> Please also note that the shipping rates for many items
                we sell are weight-based. The weight of any such item can be
                found on its detail page. To reflect the policies of the
                shipping companies we use, all weights will be rounded up to the
                next full pound.
              </p>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box>
            <p
              style={{
                marginTop: "12px",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              This is a custom product tab. You can set different content for
              tabs for each product. You can add content of the tabs in the
              admin on product configuration page.
            </p>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProductTabs;
