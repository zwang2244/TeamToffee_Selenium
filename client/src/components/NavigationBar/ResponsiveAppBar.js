import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@material-ui/core';
import {createMuiTheme, MuiThemeProvider, makeStyles} from '@material-ui/core/styles';
// import Unlogginprofile from '../images/Unlogginprofile';
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
      <div style={{ width: '100%' }}>
      <AppBar position="fixed">
        <Container
          >
          <Toolbar disableGutters>
            <Typography
              variant="h5"
            >
              PetitionRate
            </Typography>

            <Box sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'space-between' 
            }} m={2} >
            
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  variant="contained"
                  color = "primary"
                >
                  {page}
                </Button>
              ))}
            
              <Tooltip title="Open Profile" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}  >
                  {/* <Avatar alt="Remy Sharp" src="../images/Unlogginprofile.png" /> */}
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
    );
  };
export default ResponsiveAppBar;