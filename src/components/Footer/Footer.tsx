import FooterStyled from "./Styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer__region">
        <p className="footer__country">United States</p>
      </div>
      <div className="footer__container">
        <div className="footer__more">
          <a
            href="#"
            className="footer__link">
            About
          </a>
          <a
            href="#"
            className="footer__link">
            Advertising
          </a>
          <a
            href="#"
            className="footer__link">
            Business
          </a>
          <a
            href="#"
            className="footer__link">
            How Search works
          </a>
        </div>
        <div className="footer__settings">
          <a
            href="#"
            className="footer__link">
            Privacy
          </a>
          <a
            href="#"
            className="footer__link">
            Terms
          </a>
          <a
            href="#"
            className="footer__link">
            Settings
          </a>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;
