import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar({ content }) {
  const location = useLocation()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> {/* Provides baseline CSS styles to ensure consistent look */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        {/* AppBar to display the top navigation bar */}
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {/* Drawer component for side navigation */}
        <Toolbar /> {/* Adjusts for the space occupied by AppBar */}
        <Box sx={{ overflow: 'auto' }}>
          {/* Box to handle overflow for the Drawer */}
          <List>
            {/* List of navigation items */}
            <ListItem key={1} disablePadding>
              <ListItemButton component ={Link} to={"/"} selected={"/" === location.pathname}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem key={2} disablePadding>
              <ListItemButton component ={Link} to={"/formula1"} selected={"/formula1" === location.pathname}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Formula 1" />
              </ListItemButton>
            </ListItem>
            <ListItem key={3} disablePadding>
              <ListItemButton component ={Link} to={"/formulae"} selected={"/formulae" === location.pathname}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Formula E" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton component ={Link} to={"/indycar"} selected={"/indycar" === location.pathname}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="IndyCar" />
              </ListItemButton>
            </ListItem>
            <ListItem key={5} disablePadding>
              <ListItemButton component ={Link} to={"/motogp"} selected={"/motogp" === location.pathname}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="MotoGP" />
              </ListItemButton>
            </ListItem>
            <ListItem key={6} disablePadding>
              <ListItemButton component ={Link} to={"/worldsbk"} selected={"/worldsbk" === location.pathname}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="WorldSBK" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Main content area, adjusted to not overlap with Drawer */}
        <Toolbar /> {/* Adjusts for the space occupied by AppBar */}
        {content} {/* Render the passed content here */}
      </Box>
    </Box>
  );
}