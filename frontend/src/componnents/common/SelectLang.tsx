import React, { ChangeEventHandler, useContext } from "react";
import ThemeContext, { themeContextType } from "../../context/themeContext";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { RootState } from "../../store";
const SelectLang: React.FC = () => {
  const dispatch = useDispatch();
  const isRtl = useSelector((state : RootState) => state.ui.isRtl)
  const { t, i18n } = useTranslation("home");
  // const { selectLang } = useContext(ThemeContext) as themeContextType;
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(uiActions.selectLang(event.target.value))
    // selectLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  let lang;
  const currecntLang = window.localStorage.getItem("lang-theme");
  switch (currecntLang) {
    case "en":
      lang = "English";
      break;

    case "fa":
      lang = "Farsi";
      break;
    case "de":
      lang = "Deutsch";
      break;

    default: {
      lang = "English";
    }
  }
  return (
    <select className="lang-select" onChange={handleChange}>
      <option value={currecntLang ? currecntLang : "en"}>{lang}</option>
      <option value="en">English</option>
      <option value="fa">Farsi</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default SelectLang;
