import Carousel from "react-material-ui-carousel";
import React from "react";
import { Box, Paper } from "@mui/material";
// import ads from "./Data/Ads";
import { useState } from "react";
import { useEffect } from "react";
import callAPI from "../../../../api/fetchData";

function Item(props) {
  return (
    <Paper
      sx={{
        backgroundColor: "#F5F5F5",
        boxShadow: 0,
        padding: "1px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <p>{props.item.name}</p>
      <p style={{ fontSize: "12px" }}>{props.item.description}</p>
    </Paper>
  );
}

function AdCarousel() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await callAPI("/mensProducts");
    setAds(response || []);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        marginTop: "120px",
      }}
    >
      <Carousel
        navButtonsAlwaysInvisible={true}
        indicators={false}
        sx={{
          marginRight: "25%",
          marginLeft: "25%",
          width: "700px",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {ads.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default AdCarousel;
