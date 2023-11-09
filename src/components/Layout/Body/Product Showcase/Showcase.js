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
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

const Showcase = () => {
  const [productData, setProductData] = useState(null);
  const [images, setImages] = useState([]);
  const [gridData, setGridData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (id) => {
    const response = await callAPI("/product/" + id);
    if (response) {
      setProductData(response || {});
      setImages(response.media || []);
    } else {
      setProductData(null);
      setImages([]);
    }

    const grids = await callAPI("/showcaseGridData");
    setGridData(grids || []);
  };

  return (
    <div>
      <Navbar />
      <AdCarousel />
      <Container sx={{ py: 2 }}>
        {productData && (
          <Grid container>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ padding: "1em" }}>
                <div>
                  <h4>{productData.name}</h4>
                  <h4 style={{ textTransform: "capitalize" }}>
                    {productData.category}
                  </h4>
                  <h4>£{productData.price}</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  <h4>Select Size</h4>
                  <h4>Size Guide</h4>
                </div>
                <Grid container>
                  {gridData.map((item, index) => (
                    <Grid item xs={4} sm={4} md={3} key={index}>
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
            </Grid>
          </Grid>
        )}
      </Container>

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
        <div></div>

        <div style={{ width: "8%" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
