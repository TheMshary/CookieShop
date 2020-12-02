import { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import cookieStore from "./stores/cookieStore";
import bakeryStore from "./stores/bakeryStore";

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
      {cookieStore.loading || bakeryStore.loading ? (
        <h1>Loadinnngggg</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
