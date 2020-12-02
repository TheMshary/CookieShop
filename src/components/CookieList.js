import { useState } from "react";
import { observer } from "mobx-react";

// Stores
import cookieStore from "../stores/cookieStore";

// Styles
import { ListWrapper } from "../styles";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const CookieList = ({ cookies }) => {
  const [query, setQuery] = useState("");

  const filteredCookies = cookies.filter((cookie) =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );

  const cookieList = filteredCookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </>
  );
};

export default observer(CookieList);
