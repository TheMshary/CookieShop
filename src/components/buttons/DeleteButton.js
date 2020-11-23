import React from "react";
import cookieStore from "../../stores/cookieStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId }) => {
  return (
    <DeleteButtonStyled onClick={() => cookieStore.deleteCookie(cookieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
