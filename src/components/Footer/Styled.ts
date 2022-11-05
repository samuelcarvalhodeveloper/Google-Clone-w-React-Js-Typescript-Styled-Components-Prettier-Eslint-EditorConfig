import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
  color: #70757a;

  .footer__region {
    padding: 1.5rem 3rem;
    border-bottom: 1px solid rgba(32, 33, 36, .1);

    .footer__us {
      font-size: 1.4rem;
    }
  }

  .footer__container {
      width: 100%;
      padding: 1.5rem 2.5rem;
      display: flex;
      justify-content: space-between;

      .footer__link {
          font-size: 1.4rem;
          color: #70757a;
          text-decoration: none;
          padding: 1.5rem;
          display: inline-block;
          text-align: center;
        }

      .footer__link:hover {
        text-decoration: underline;
      }
  }

  @media screen and (min-width: 665px) and (max-width: 1200px) {
    .footer__container {
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: 665px) {
    .footer__container {
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
  }
`;

export default FooterStyled;
