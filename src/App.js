import { useState } from "react";
import { Route, Switch } from "react-router";

// Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "papayawhip",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "papayawhip",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail />
        </Route>
        <Route path="/cookies">
          <CookieList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
