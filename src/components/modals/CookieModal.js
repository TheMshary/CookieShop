import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles.js";
import cookieStore from "../../stores/cookieStore";

/**
 * Null Coalescing Operator
 * 
 * oldCookie ? oldCookie : {
      name: "",
      price: 0,
      description: "",
      image: ""
    }
 * 
 * ...same as...
 * 
 * oldCookie ?? {
      name: "",
      price: 0,
      description: "",
      image: ""
    }
 */

const CookieModal = ({ isOpen, closeModal, oldCookie, bakery }) => {
  const [cookie, setCookie] = useState(
    oldCookie ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCookie({ ...cookie, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldCookie) cookieStore.updateCookie(cookie);
    else cookieStore.createCookie(cookie, bakery);
    // cookieStore[oldCookie ? "updateCookie" : "createCookie"](cookie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cookie Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={cookie.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              value={cookie.price}
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={cookie.description}
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            onChange={handleImage}
            type="file"
            className="form-control"
          />
        </div>
        <CreateButtonStyled type="submit">
          {oldCookie ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
