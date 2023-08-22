import React, { useContext } from "react";
import ThemeContext from "./utility/ThemeContext";
import classNames from "classnames";

const Footer = () => {
  const context = useContext(ThemeContext);

  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>{context[2].t("changeLanguage")}: </span>
        <span
          className={classNames("languague-picker", {
            selected: context[2].currentLanguage === "vi" ? true : false,
          })}
          onClick={context[2].changeLanguage}
        >
          🇻🇳
        </span>
        <span
          className={classNames("languague-picker", {
            selected: context[2].currentLanguage === "en" ? true : false,
          })}
          onClick={context[2].changeLanguage}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
