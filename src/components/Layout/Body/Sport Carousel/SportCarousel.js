import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import sportItems from "./Data/SportItems";
import { useState } from "react";
import { useEffect } from "react";
import callAPI from "../../../../api/fetchData";

const SportCarousel = () => {
  const [sportItems, setSportItems] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await callAPI("/sportItems");
    setSportItems(response || []);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1540 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1540, min: 1040 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 1040, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <h3 style={{ marginLeft: "1em", marginRight: "1em" }}>Shop by Sport</h3>
      <Box sx={{ padding: "20px 0 20px 0", cursor: "pointer" }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {sportItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{ maxWidth: "95%" }}
                />
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default SportCarousel;
