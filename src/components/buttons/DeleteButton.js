import React from 'react'
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const cookieId = props.cookieId;
  const handleDelete = () => {
    props.deleteCookie(cookieId);
  }
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete
    </DeleteButtonStyled>
  )
}

export default DeleteButton
