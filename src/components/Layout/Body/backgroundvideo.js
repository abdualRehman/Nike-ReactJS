import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

export const BackgroundVideo = () => {
  return (
    <>
      <Box sx={{ paddingTop: "40px" }}>
        <ReactPlayer
          url="https://youtu.be/79hzoeRhP74?si=oeBYo8CqfmtNApxj"
          muted="true"
          playing="true"
          loop="true"
          width="100%"
          height="1080px"
          controls="false"
        />
      </Box>
    </>
  );
};

export default BackgroundVideo;
