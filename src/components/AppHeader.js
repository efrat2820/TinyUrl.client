import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import Service from "../Service";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router'
import {teal} from '@mui/material/colors';
import img from "../Image/vector.png"

const color = teal[300]  ;


const pages = [
 
 { title: "add URL", route: "/link" },
 { title: "add target", route: "/Target" },
 //{ title: "target", route: "/chart" },
 { title: "about", route: "/about" },

];

function AppHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const location = useLocation()

  const [loginUser, setLoginUser] = useState(null);
  useEffect(() => {
    console.log('render app header', loginUser)
    setLoginUser(Service.getLoginUser());
  }, [location.key]);

  return (
    <AppBar position="static" sx={{ bgcolor: color}}  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
        <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={img}
        />
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
            }}
          >
            HomePage
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link style={{ textDecoration: "none" }} href={page.route}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TextFieldsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HomePage
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link style={{ textDecoration: "none" }} href={page.route}>
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          {loginUser ? (
            <div>
              {console.log('loginUser',loginUser)}
              {loginUser.name} Connected | 
              <Button color="inherit" onClick={()=>{
                Service.logout();
                navigate('/')
              }}>disconnection</Button>
            </div>
          ) : (
            <div>
            <Button color="inherit" onClick={()=>{
                navigate('/login')
              }}>connection</Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
