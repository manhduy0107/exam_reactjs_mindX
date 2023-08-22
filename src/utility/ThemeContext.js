import { useReducer } from "react";
import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
import reducer, { getInitState }  from "../reducer/reducer";


const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("vi");
  const changeLanguage = () => {
    setCurrentLanguage(currentLanguage === "vi" ? "en" : "vi");
    i18n.changeLanguage(currentLanguage === "vi" ? "en" : "vi");
  };
  const [state, dispatch] = useReducer(reducer, getInitState());

  const value = {    
    currentLanguage,
    t,
    changeLanguage,
  };

  return (
    <ThemeContext.Provider value={[state, dispatch, value]}>
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider };
export default ThemeContext;