import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import MenuModelos from "../MenuModelos/MenuModelos";
import { Link } from "react-router-dom";
import "./ResponsiveNavigation.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CelularesContext } from "../../context/CelularesContext";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const ResponsiveNavigation = () => {
  const { items } = useContext(CelularesContext);

  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <MenuModelos />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartIcon />
              {items[0].length}
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavigation;
