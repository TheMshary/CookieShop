import React from "react";
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";

// Styles
import { Logo, NavItem, ThemeButton } from "../styles";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/" className="navbar-brand">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          width="100"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavItem to="/bakeries" style={{ margin: 10, float: "right" }}>
              Bakeries
            </NavItem>
            <NavItem to="/cookies" style={{ margin: 10, float: "right" }}>
              Cookies
            </NavItem>
          </li>
          <li className="nav-item">
            <ThemeButton onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
