import { useRef } from "react";
import SearchEngineStyled from "./Styled";
import logo from "../../assets/img/GoogleLogo.png";
import label from "../../assets/img/Search.svg";
import mic from "../../assets/img/Mic.svg";
import camera from "../../assets/img/Camera.svg";

function SearchEngine() {
  const mainSearchRef = useRef<HTMLDivElement>(null);

  return (
    <SearchEngineStyled>
      <div className="main__container">
        <img
          src={logo}
          alt="Google logo"
        />

        <form
          action="#"
          className="main__form">
          <div
            className="main__search"
            ref={mainSearchRef}>
            <div className="main__label">
              <img
                src={label}
                alt="search__label"
              />
            </div>
            <input
              type="text"
              className="main__input"
              autoComplete="none"
              onFocus={() => {
                if (mainSearchRef.current) {
                  mainSearchRef.current.style.boxShadow =
                    "0 1px 6px rgb(32 33 36 / 28%)";
                }
              }}
            />
            <button
              type="button"
              className="main__mic">
              <img
                src={mic}
                alt="microphone"
                className="main__action"
              />
            </button>
            <button
              type="button"
              className="main__camera">
              <img
                src={camera}
                alt="camera"
                className="main__action"
              />
            </button>
          </div>
        </form>
        <div className="main__surprise">
          <button
            type="button"
            className="main__button">
            Google Search
          </button>
          <button
            type="button"
            className="main__button">
            I'm Feeling lucky
          </button>
        </div>
      </div>
    </SearchEngineStyled>
  );
}

export default SearchEngine;
