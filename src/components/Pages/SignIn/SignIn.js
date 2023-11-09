import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg"
              width={48}
              height={24}
              alt="jordan"
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png"
              width={48}
              height={24}
              alt="converse"
            />
          </div>
          <Typography component="h1" variant="h5">
            Enter your email to join us or sign in.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Grid container>
              <Grid item xs>
                <p>
                  By continuing, you agree to Nike’s Terms of Use and you
                  confirm you have read Nike’s Privacy Policy.
                </p>
              </Grid>
            </Grid>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize",
                  backgroundColor: "black",
                }}
              >
                Continue
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
