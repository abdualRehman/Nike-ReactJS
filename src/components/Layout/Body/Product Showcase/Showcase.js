import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../Footer/Footer";
import { Paper, Grid } from "@material-ui/core";
// import images from "./Data/ShowcaseImages";
// import gridData from "./Data/ShowcaseGridData";
import Navbar from "../../Header/NavBar/Navbar";
import AdCarousel from "../../Header/Ad Carousel/AdCarousel";
import { useState } from "react";
import { useEffect } from "react";
import callAPI from "../../../../api/fetchData";

const Showcase = () => {
  const [images, setImages] = useState([]);
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await callAPI("/showcaseImages");
    setImages(response || []);

    const grids = await callAPI("/showcaseGridData");
    setGridData(grids || []);
  };

  return (
    <div>
      <Navbar />
      <AdCarousel />
      <div
        className="gallery-container"
        style={{
          padding: "1em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "15%" }}></div>
        <div>
          <ImageGallery
            items={images}
            thumbnailPosition="left"
            useBrowserFullscreen={false}
            showPlayButton={false}
            showIndex={false}
            showFullscreenButton={false}
            slideDuration={0}
            height="500px"
          />
        </div>
        <div style={{ padding: "1em" }}>
          <div>
            <h4>Jordan True Flight</h4>
            <h4>Younger Kids' Shoes </h4>
            <h4>£52.95</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <h4>Select Size</h4>
            <h4>Size Guide</h4>
          </div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ width: "50%", padding: "1em" }}
          >
            {gridData.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Paper
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    width: "45%",
                    margin: "8px",
                  }}
                >
                  {item}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ width: "8%" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
