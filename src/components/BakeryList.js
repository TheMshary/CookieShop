// Styles
import { Title } from "../styles";
import { useState } from "react";

// Components
import BakeryItem from "./BakeryItem";

// Stores
import bakeryStore from "../stores/bakeryStore";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <div className="container">
      <Title>Bakeries</Title>
      <SearchBar setQuery={setQuery} />
      {bakeryList}
    </div>
  );
};

export default observer(BakeryList);
