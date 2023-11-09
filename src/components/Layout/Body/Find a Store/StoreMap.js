import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import Navbar from "../../Header/NavBar/Navbar";
import AdCarousel from "../../Header/Ad Carousel/AdCarousel";


const StoreMap = () => {
  return (
    <>
    <Navbar />
    <AdCarousel />
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
      >
      <Typography variant="h5" gutterBottom>
        Nike Store Locations
      </Typography>
      <Box>
        <iframe
        title="London"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.8787944499!2d-0.4133954994485211!3d51.52844205634744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondona!5e0!3m2!1slv!2suk!4v1698840683244!5m2!1slv!2suk"
        width="600"
        height="450"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Paper>
    </>
  );
};

export default StoreMap;
