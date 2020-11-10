import React from 'react'
import { DetailWrapper, GoBackButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = (props) => {
  const cookie = props.cookie;
  const handleDelete = (cookieId) => {
    props.deleteCookie(cookieId);
    props.setCookie();
  }

  return (
    <>
      <GoBackButton onClick={() => props.setCookie()}>Cookie List</GoBackButton>
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KD</p>
        <DeleteButton cookieId={cookie.id} deleteCookie={handleDelete} />
      </DetailWrapper>
    </>
  )
}

export default CookieDetail;
