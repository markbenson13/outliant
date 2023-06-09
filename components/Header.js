import * as React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

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
    <AppBar className={styles["header-wrapper"]} position="fixed">
      <Container maxWidth="xl">
        <Toolbar className={styles["header-container"]} disableGutters>
          <Typography
            className={styles["logo"]}
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Logo
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
              <MenuIcon color="primary" />
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
              <MenuItem>
                <Link href="/" legacyBehavior>
                  <a className={router.pathname == "/" ? styles["active"] : ""}>
                    Home
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about" legacyBehavior>
                  <a
                    className={
                      router.pathname == "/about" ? styles["active"] : ""
                    }
                  >
                    About
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/services" legacyBehavior>
                  <a
                    className={
                      router.pathname == "/services" ? styles["active"] : ""
                    }
                  >
                    Services
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/products" legacyBehavior>
                  <a
                    className={
                      router.pathname == "/products" ? styles["active"] : ""
                    }
                  >
                    Products
                  </a>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            className={styles["logo"]}
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Logo
          </Typography>
          <Box
            className={styles["main-navigation"]}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <MenuItem>
              <Link href="/" legacyBehavior>
                <a className={router.pathname == "/" ? styles["active"] : ""}>
                  Home
                </a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about" legacyBehavior>
                <a
                  className={
                    router.pathname == "/about" ? styles["active"] : ""
                  }
                >
                  About
                </a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/services" legacyBehavior>
                <a
                  className={
                    router.pathname == "/services" ? styles["active"] : ""
                  }
                >
                  Services
                </a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/products" legacyBehavior>
                <a
                  className={
                    router.pathname == "/products" ? styles["active"] : ""
                  }
                >
                  Products
                </a>
              </Link>
            </MenuItem>
          </Box>

          <Box>
            <Button variant="contained" color="primary">
              Call to Action
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
