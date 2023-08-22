import React, { useContext } from "react";
import ThemeContext from "./utility/ThemeContext";

const Header = () => {
  const [state] = useContext(ThemeContext);
  const { todos } = state;
  let getTodo = [];
  todos?.forEach((todo) => todo.status === 'pending' ? getTodo.push(todo) : '')
  const context = useContext(ThemeContext);
  return <div className="header">{context[2].t("totalTask", { job: getTodo.length })}</div>;
};

export default Header;
