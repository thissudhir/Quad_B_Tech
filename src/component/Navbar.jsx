import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  whiteBackground: {
    backgroundColor: "white",
    color: "#1976D2",
    // boxShadow: "none",
  },

  blueBackground: {
    backgroundColor: "#EDF2FF",
    color: "#1976D2",
  },
};

const settings = ["Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const userFirstName = localStorage.getItem("firstName");
  const isLoggedIn = localStorage.getItem("login");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.whiteBackground}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Quad B Tech
          </Typography>
          {isLoggedIn ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography textAlign="center">{userFirstName}</Typography>

              <Tooltip title="Open settings" sx={{}}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userFirstName}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={logout}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
