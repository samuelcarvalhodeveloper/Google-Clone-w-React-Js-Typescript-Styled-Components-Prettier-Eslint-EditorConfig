import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;

  .header__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin: 1rem 2rem;


    .header__link {
      font-size: 1.3rem;
      text-decoration: none;
      color: rgba(0,0,0,.87);
    }

    .header__link:hover {
      text-decoration: underline
    }

    .header__more{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;

      .header__icon {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .header__more:hover {
      background: rgba(32, 33, 36, .1);
    }

    .header__profile {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;

      .header__photo {
        width: 100%;
        height: 100%;
        background: #ffbd00;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .header__profile:hover {
      cursor: pointer;
    }
  }
`;

export default HeaderStyled;
