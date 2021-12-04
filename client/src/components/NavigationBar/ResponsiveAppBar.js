import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@material-ui/core';
import "./ResponsiveAppBar.css";
const pages = ['About', 'Home'];
const settings = ['My Home', 'Log In', 'Sign Out'];

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <div>
      <AppBar position="fixed">
        <div className = "nav_bar">

          <div className = "nav_left">
            <div className = "nav_title">
              <Typography
                variant="h5"
              >
                PetitionRate
              </Typography>
            </div>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                variant="contained"
                color = "primary"
                className = "nav_btn"
              >
                {page}
              </Button>
            ))}
          </div>

          <Tooltip title="Open Profile" >
            <div className = "nav_profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}  >
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </div>
          </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </div>
      </AppBar>
      </div>
    );
  };
export default ResponsiveAppBar;