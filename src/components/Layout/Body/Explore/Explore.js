import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import exploreItems from "./Data/ExploreItems";
import { useState } from "react";
import { useEffect } from "react";
import callAPI from "../../../../api/fetchData";

function Explore() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await callAPI("/exploreItems");
    setData(response || []);
  };

  return (
    <div>
      <div>
        <h3 style={{ marginLeft: "1em", marginRight: "1em" }}>
          More to Explore
        </h3>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((item, index) => (
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
                <p>{item.targetAudience}</p>
              </Link>
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Explore;
