import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: "40px",
  [theme.breakpoints.down("sm")]: {
    height: "220px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "480px",
  },
  [theme.breakpoints.up("md")]: {
    height: "720px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "1080px",
  },
}));

export const BackgroundVideo = () => {
  return (
    <StyledBox>
      <ReactPlayer
        url="https://youtu.be/79hzoeRhP74?si=oeBYo8CqfmtNApxj"
        muted={true}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        controls={false}
      />
    </StyledBox>
  );
};

export default BackgroundVideo;
