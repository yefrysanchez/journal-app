import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
        },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: {
              sm: "none",
            },
          }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" noWrap component='div'>JournalApp</Typography>
          <IconButton color="inherit">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
