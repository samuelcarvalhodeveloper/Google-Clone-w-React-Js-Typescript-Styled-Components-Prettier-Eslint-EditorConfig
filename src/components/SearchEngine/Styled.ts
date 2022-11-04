import styled from "styled-components";

const SearchEngineStyled = styled.main`
  width: 100%;
  max-width: 58rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  .main__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 3rem;
    width: 100%;

    .main__form {
      width: calc(-4rem + 100%);

      .main__search {
        display: flex;
        justify-content: center;
        align-items: center;
        border: .1rem solid #dfe1e5;
        border-radius: 3rem;

        .main__label {
          width: 2.8rem;
          margin: 0 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;

          .search__label {
            width: 2rem;
            height: 2rem;
          }
        }

        .main__input {
          height: 4.3rem;
          width: 100%;
          border: none;
        }

        .main__mic {
          height: 4.5rem;
          width: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
        }

        .main__camera {
          height: 4.5rem;
          width: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          margin-right: 1rem;
              }

        .main__action {
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      .main__search:hover {
        box-shadow: 0 .1rem .6rem rgb(32 33 36 / 28%)
      }
    }

    .main__surprise {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;

      .main__button {
        padding: 1rem;
        border: none;
        color: #3c4043;
        background: #f8f9fa;
        font-size: 1.4rem;
        border-radius: 0.4rem;
      }

      .main__button:hover {
        box-shadow: 0 0 .5rem 0 rgb(32 33 36 / 28%)
      }
    }
  }
`;

export default SearchEngineStyled;
