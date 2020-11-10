import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  return (
    <DeleteButtonStyled onClick={() => deleteCookie(cookieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
