import { Link } from "react-router-dom";

import { CookieWrapper } from "../styles";

// Buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const CookieItem = ({ cookie }) => {

  return (
    <CookieWrapper>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <UpdateButton cookie={cookie} />
      <DeleteButton cookieId={cookie.id} />
    </CookieWrapper>
  );
};

export default CookieItem;
