import { useState } from "react";
import cookies from './cookies';

// Styles
import { GlobalStyle, ThemeButton, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import CookieList from "./components/CookieList";
import CookieDetail from "./components/CookieDetail";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "papayawhip",
    pink: "#ff85a2",
    red: "#ff3232"
  },
  dark: {
    mainColor: "papayawhip",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232"
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [cookie, setCookie] = useState(null);
  const [_cookies, setCookies] = useState(cookies);

  const deleteCookie = (cookieId) => {
    const updatedCookies = _cookies.filter(cookie => cookie.id !== cookieId);
    setCookies(updatedCookies);
  }

  const toggleTheme = () => setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () => {
    if (cookie) return <CookieDetail deleteCookie={deleteCookie} cookie={cookie} setCookie={setCookie} />
    else return <CookieList cookies={_cookies} deleteCookie={deleteCookie} setCookie={setCookie} />
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Cookies and Beyond</Title>
        <Description>Where cookie maniacs gather</Description>
        <ShopImage
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          alt="Cookie Shop"
        />
      </div>
      {setView()}
    </ThemeProvider>
  )
}

export default App;
