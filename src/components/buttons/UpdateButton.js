import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import CookieModal from "../modals/CookieModal";

const UpdateButton = ({ cookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CookieModal oldCookie={cookie} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default UpdateButton
