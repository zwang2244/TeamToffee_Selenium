import * as React from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./ResponsiveAppBar.css";
import { CoverageSummary } from 'istanbul-coverage-display';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const history = useHistory();
  const routeChangetoHome = () => {
    history.push("/");
  };

  const routeChangetoMyHome = () => {
    history.push("/myhome");
  };

  const routeChangetoLogin = () => {
    history.push("/signin");
  };

  const routeChangeToAbout = () => {
    history.push("/about");
  };

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
        <CoverageSummary />
        <div className="nav_bar">
          <div className="nav_left">
            <div className="nav_title">
              <Typography variant="h5">PetitionRate</Typography>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="nav_btn"
              onClick={routeChangeToAbout}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="nav_btn"
              onClick={routeChangetoHome}
            >
              Home
            </Button>
          </div>

          <Tooltip title="Open Profile">
            <div className="nav_profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </div>
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
            <MenuItem key="My Home" onClick={routeChangetoMyHome}>
              <Typography textAlign="center">My Home</Typography>
            </MenuItem>
            <MenuItem key="Log In" onClick={routeChangetoLogin}>
              <Typography textAlign="center">Log In</Typography>
            </MenuItem>
            <MenuItem key="Sign Out" onClick={routeChangeToAbout}>
              <Typography textAlign="center">Sign Out</Typography>
            </MenuItem>
          </Menu>
        </div>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
