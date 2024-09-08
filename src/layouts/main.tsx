"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";

import { useBoolean, useToggle } from "@/hooks";

import useBaseThemeContext from "@/theme/contexts/use-base-theme-context";

const pages = [
  { name: "TOP", url: "/" },
  { name: "Members", url: "/user" },
  { name: "Info", url: "/info" },
  { name: "MyProfile", url: "/profile" },
];
const settings = ["TOP", "Members", "Info", "MyProfile"];
const themeSettings: ("light" | "dark")[] = ["light", "dark"];

function ResponsiveAppBar() {
  const navToggle = useToggle();
  const userToggle = useBoolean();
  const themeToggle = useBoolean();

  const { changeMode } = useBaseThemeContext();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            42 INTRA SNS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => {
                navToggle.onToggle(event.currentTarget);
              }}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navToggle.value}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={navToggle.value}
              onClose={navToggle.onClose}
              sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={navToggle.onClose}>
                  <Typography sx={{ textAlign: "center" }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            42 INTRA SNS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.name} onClick={navToggle.onClose} sx={{ my: 2, color: "white", display: "block" }}>
                <a href={page.url} style={{ color: "inherit", textDecoration: "none" }}>
                  {page.name}
                </a>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={userToggle.onTrue} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Drawer anchor="right" open={userToggle.value} onClose={userToggle.onFalse}>
              <Box sx={{ width: 250 }} role="presentation" onClick={userToggle.onFalse}>
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <ListItemButton component="a" href={page.url} onClick={userToggle.onFalse}>
                        <ListItemText primary={page.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Theme Settings">
              <IconButton onClick={themeToggle.onTrue} sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Drawer anchor="right" open={themeToggle.value} onClose={themeToggle.onFalse}>
              <Box sx={{ width: 250 }} role="presentation" onClick={themeToggle.onFalse}>
                <List>
                  {themeSettings.map((text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          changeMode(text);
                        }}>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
