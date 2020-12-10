import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import bakeryStore from "../stores/bakeryStore";

// Styles
import { DetailWrapper } from "../styles";
import CookieList from "./CookieList";
import AddButton from "./buttons/AddButton";
import cookieStore from "../stores/cookieStore";
import authStore from "../stores/authStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (_bakery) => _bakery.slug === bakerySlug
  );

  if (!bakery) return <Redirect to="/bakeries" />;
  const cookiesFromCookieStore = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );

  return (
    <div>
      <DetailWrapper>
        <h1>{bakery.name}</h1>
        <img src={bakery.image} alt={bakery.name} />
      </DetailWrapper>
      <CookieList cookies={cookiesFromCookieStore} />
      {authStore.user && <AddButton bakery={bakery} />}
    </div>
  );
};

export default observer(BakeryDetail);
