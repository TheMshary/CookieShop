import { CookieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper>
      <img
        onClick={() => props.setCookie(cookie)}
        src={cookie.image}
        alt={cookie.name} />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </CookieWrapper>
  )
}

export default CookieItem;
