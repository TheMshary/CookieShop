import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import cookieStore from '../stores/cookieStore';

// Styles
import { DetailWrapper } from "../styles";

// Components
import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = () => {
  const { cookieSlug } = useParams();
  const cookie = cookieStore.cookies.find((_cookie) => _cookie.slug === cookieSlug);

  if (!cookie) return <Redirect to="/cookies" />;

  return (
    <>
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KD</p>
        <DeleteButton cookieId={cookie.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(CookieDetail);
