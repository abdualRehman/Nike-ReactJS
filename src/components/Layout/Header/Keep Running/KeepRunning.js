import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function KeepRunning() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ marginBottom: 0 }}>Keep Running</p>
        <h1
          style={{
            fontWeight: 500,
            textTransform: "uppercase",
            marginTop: "1px",
            fontSize: "76px",
            textAlign: "center",
          }}
        >
          It's still better outside.
        </h1>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/NewFeaturedDetails" style={{textDecoration: "none", color: "white"}}>
        <button
          style={{
            background: "black",
            color: "white",
            borderRadius: "25px",
            padding: "10px 20px 10px 20px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Shop
        </button>
          </Link>
      </div>
    </>
  );
}
