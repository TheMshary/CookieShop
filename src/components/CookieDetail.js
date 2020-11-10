import React from "react";
import { Redirect, useParams } from "react-router-dom";

import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = ({ cookies, deleteCookie }) => {
  // const cookieSlug = useParams().cookieSlug;
  const { cookieSlug } = useParams();
  const cookie = cookies.find((_cookie) => _cookie.slug === cookieSlug);

  if (!cookie) return <Redirect to="/cookies" />;

  return (
    <>
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KD</p>
        <DeleteButton cookieId={cookie.id} deleteCookie={deleteCookie} />
      </DetailWrapper>
    </>
  );
};

export default CookieDetail;
