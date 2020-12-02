import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import CookieModal from "../modals/CookieModal";

const AddButton = ({ bakery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CookieModal isOpen={isOpen} closeModal={closeModal} bakery={bakery} />
    </>
  );
};

export default AddButton;
