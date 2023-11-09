import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Button, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";

function NikeNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 921,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <>
        <ThemeProvider theme={theme}>
      <AppBar
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg"
                  width={48}
                  height={24}
                  alt="jordan"
                />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png"
                  width={48}
                  height={24}
                  alt="converse"
                />
              </Link>
            </IconButton>
          </div>
          <div>
            <Link to="/StoreMap" style={{ textDecoration: "none" }}>
              <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
                <p>Find a Store</p>
              </IconButton>
            </Link>
            <span>|</span>
            <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
              <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
                <p>Help</p>
              </IconButton>
            </Link>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <Link
                to="/SignUp"
                style={{ textDecoration: "none", color: "grey" }}
              >
                <p>Join Us</p>
              </Link>
            </IconButton>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <Link
                to="/SignIn"
                style={{ textDecoration: "none", color: "grey" }}
              >
                <p>Sign In</p>
              </Link>
            </IconButton>
          </div>
        </Box>
        {/* SECOND APPBAR --------------------------------------------*/}
        <Box>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Link to="/">
                <IconButton>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-nike-15-761696.png?f=webp&w=256"
                    width={50}
                    height={50}
                    alt="nike"
                  />
                </IconButton>
              </Link>
            </div>
            <div style={{paddingLeft:"140px"}}>
              <Hidden mdDown>
                <Link
                  to="/NewFeaturedDetails"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    New & Featured
                  </Button>
                </Link>
                <Link
                  to="/MensDetails"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Men
                  </Button>
                </Link>
                <Link
                  to="/ComingSoon"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Women
                  </Button>
                </Link>
                <Link
                  to="/ComingSoon"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Kids
                  </Button>
                </Link>
                <Link
                  to="/ComingSoon"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Sale
                  </Button>
                </Link>
              </Hidden>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Hidden mdDown>
                <SearchBar />
              </Hidden>
              <Hidden mdUp>
                <IconButton style={{ color: "black" }} />
              </Hidden>
              <IconButton>
                <Link
                  to="/ComingSoon"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  to="/ComingSoon"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <WorkOutlineIcon></WorkOutlineIcon>
                </Link>
              </IconButton>
            </div>
          </Toolbar>
          <Hidden smUp>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <Link to="/NewFeaturedDetails" style={{ textDecoration: "none" }}>
                <MenuItem>New & Featured</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Men</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Women</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Kids</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Sale</MenuItem>
              </Link>
              <Link to="/SignUp">
                <MenuItem>Join Us</MenuItem>
              </Link>
              <Link to="/SignIn">
                <MenuItem>Log In</MenuItem>
              </Link>
            </Menu>
          </Hidden>
        </Box>
      </AppBar>
      </ThemeProvider>
    </>
  );
}

export default NikeNavbar;
