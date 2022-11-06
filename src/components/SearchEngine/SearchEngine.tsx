import { useEffect, useRef } from "react";
import SearchEngineStyled from "./Styled";
import logo from "../../assets/img/GoogleLogo.png";
import label from "../../assets/img/Search.svg";
import mic from "../../assets/img/Mic.svg";
import camera from "../../assets/img/Camera.svg";

function SearchEngine() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {}, []);

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
          className="main__form"
          ref={formRef}>
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
              onFocus={() => {
                if (formRef.current) {
                  formRef.current.style.boxShadow =
                    "0 1px 6px rgba(32,33,36,.28)";
                }
              }}
              onBlur={() => {
                if (formRef.current !== null) {
                  formRef.current.style.boxShadow = "none";
                }
              }}
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
