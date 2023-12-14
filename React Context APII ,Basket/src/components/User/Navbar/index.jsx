import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { BasketContextItem } from "../../../services/context/BasketItem";
const Navbar = () => {
  const {basketitem} = useContext(BasketContextItem)

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Link to="/">
              <Button
                color="inherit"
                style={{
                  color: "white",
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button
                color="inherit"
                style={{
                  color: "white",
                }}
              >
                Products
              </Button>
            </Link>
            <Link to="/basket">
              <Button
                color="inherit"
                style={{
                  color: "white",
                }}
              >
                <span>
                  Basket<sup>{basketitem.length}</sup>
                </span>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Navbar;
