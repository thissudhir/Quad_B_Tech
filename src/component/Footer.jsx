import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Container,
  BottomNavigation,
} from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; {new Date().getFullYear()} Quad B Tech
          </Typography>
          <Link href="#" color="inherit" style={{ marginLeft: "20px" }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" style={{ marginLeft: "20px" }}>
            Privacy Policy
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
