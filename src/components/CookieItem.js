import { Link } from "react-router-dom";

import { CookieWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const CookieItem = ({ cookie, deleteCookie }) => {
  // const cookie = props.cookie;
  // const { cookie, deleteCookie } = props;

  return (
    <CookieWrapper>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
