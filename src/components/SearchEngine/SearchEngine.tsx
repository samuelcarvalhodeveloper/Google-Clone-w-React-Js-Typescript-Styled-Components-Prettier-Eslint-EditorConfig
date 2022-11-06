import SearchEngineStyled from "./Styled";
import logo from "../../assets/img/GoogleLogo.png";
import label from "../../assets/img/Search.svg";
import mic from "../../assets/img/Mic.svg";
import camera from "../../assets/img/Camera.svg";

function SearchEngine() {
  return (
    <SearchEngineStyled>
      <div className="main__container">
        <div className="main__logo">
          <img
            src={logo}
            alt="Google logo"
          />
        </div>
        <form
          action="#"
          className="main__form">
          <div className="main__content">
            <div className="main__label">
              <img
                src={label}
                alt=""
                width="10px"
              />
            </div>
            <input
              type="text"
              className="main__input"
              autoComplete="off"
            />
            <button
              type="button"
              className="main__action">
              <img
                src={mic}
                alt=""
                width="10px"
              />
            </button>
            <button
              type="button"
              className="main__action">
              <img
                src={camera}
                alt=""
                width="10px"
              />
            </button>
          </div>
        </form>

        <div className="main__lucky">
          <button
            className="main__redirect"
            type="button">
            Google Search
          </button>
          <button
            className="main__redirect"
            type="button">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </SearchEngineStyled>
  );
}

export default SearchEngine;
