import { Box } from "@mui/material";
import React from "react";

const Footer = () => {

  const linkStyle = {
    textDecoration: "none", 
    color: "#7e7e7e",
  };

  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#111111",
          color: "white",
          padding: "1em",
        }}
      >
        <div>
          <h3>Explore Nike</h3>
          <ul style={{ listStyleType: "none", }}>
            <li>
              <a href="#" style={linkStyle}>About Us</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>News</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Careers</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Investors</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Customer Service</h3>
          <ul style={{ listStyleType: "none", }}>
            <li>
              <a href="#" style={linkStyle}>Contact Us</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Order Status</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Shipping</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Returns</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Connect with Nike</h3>
          <ul style={{ listStyleType: "none", }}>
            <li>
              <a href="#" style={linkStyle}>Instagram</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Facebook</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Twitter</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>YouTube</a>
            </li>
          </ul>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#111111",
          color: "white",
          padding: "2em",
        }}
      >
        <div></div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
          </p>
        </div>
        <div>
          <ul style={{ listStyleType: "none", }}>
            <li>
              <a href="#" style={linkStyle}>Privacy Policy</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Terms of Use</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Accessibility Statement</a>
            </li>
          </ul>
        </div>
        <div></div>
      </Box>
    </footer>
  );
};

export default Footer;
