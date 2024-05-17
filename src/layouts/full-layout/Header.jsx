import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/mancuerna.png";
import Bar from "../../assets/bar.png";


function Header() {
  const pages = ["About us", "Prices", "Blog", "Contact"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "black" }}>
        <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
          <img src={Logo} alt="Mancuerna" style={{ width: '24px', height: '24px', display: { xs: "none", md: "flex" }, marginRight: '8px' }} />
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
              color: "#AB8F16",
              textDecoration: "none",
            }}
          >
            FITSENSE
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<img src={Logo} alt="Mancuerna" style={{ width: '24px', height: '24px', display: { xs: "none", md: "flex" }, marginRight: '8px' }} /> agrega el logo de la mancuerna en el centro del header*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#AB8F16",
              textDecoration: "none",
            }}
          >
            Fitsense
          </Typography>
{/*aqui es donde hacermos que la barra del header de abaut us, contact, blog ... pueda ir a la ruta al hacer click*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#AB8F16", display: "block" }}
              component={Link}
              to={`/${page.replace(' ', '').toLowerCase()}`}
            >
              {page}
            </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={Bar}
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
            {/*logica para el manejo del menu esquina superior derecha para cerrar sesion (borrar token) y usar la navegacion*/}

            {settings.map((setting) => (
              setting === "Logout" ? (
                <MenuItem onClick={cerrarSesion}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ) : (
                <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={`/${setting.toLowerCase()}`}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              )
            ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
