import React, { useContext } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import {useSearchParams} from 'react-router-dom'
import TodoListCompleted from "./views/TodoListCompleted";
import TodoListPending from "./views/TodoListPending";
import ThemeContext from "./utility/ThemeContext";
export default function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(ThemeContext);
  const showToDo = searchParams.get("withDone");
  return (
    <div className="App">
     <div className="control-button">
          <button className="button-choose" onClick={() => setSearchParams({withDone : 0})}>{context[2].t("all")}</button>
          <button className="button-choose" onClick={() => setSearchParams({withDone : 1})}>{context[2].t("accomplished")}</button>
          <button className="button-choose" onClick={() => setSearchParams({withDone : 2})}>{context[2].t("unfinished")}</button>
     </div>
      <div className="container">
        <TodoListHeader />
        {
          showToDo == 1 ? <TodoListCompleted/> : showToDo == 2 ? <TodoListPending/> : <TodoList /> 
        }
        <Form />
      </div>
      <Footer />
    </div>
  );
}
