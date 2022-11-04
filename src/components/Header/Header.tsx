import HeaderStyled from "./Styled";
import more from "../../assets/img/More.svg";

function Header() {
  return (
    <HeaderStyled>
      <div className="header__container">
        <a
          href="#"
          className="header__link">
          Gmail
        </a>
        <a
          href="#"
          className="header__link">
          Images
        </a>
        <a
          href="#"
          className="header__more">
          <img
            src={more}
            alt="more button"
            className="header__icon"
          />
        </a>
        <a className="header__profile">
          <div className="header__photo">{false}</div>
        </a>
      </div>
    </HeaderStyled>
  );
}

export default Header;
