import React, { useContext, useState } from "react";
import ThemeContext from "./utility/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { actions } from "./reducer";

const Form = () => {
  const context = useContext(ThemeContext);
  const [state, dispatch] = useContext(ThemeContext);
  const { todoInput } = state;
  const [getDay, setGetDay] = useState();

  console.log(typeof(getDay?.day))
  console.log(Math.floor(new Date(getDay?.day).getTime() / 1000))
   
  const handleAdd = () => {
    if (todoInput === undefined) {
      toast("Vui lòng nhập công việc!");
    } else {
      dispatch(
        actions.addTodo({
          id: uuidv4(),
          todo: todoInput,
          status: "pending",
          dayLeft: Math.floor(new Date(getDay?.day).getTime()) || Date.now(),
        })
      );
      dispatch(actions.setTodoInput(""));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form">
        <input
          value={todoInput || ""}
          placeholder={context[2].t("enterTask")}
          onChange={(e) => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <input id="txtDate" min={new Date().toJSON().slice(0, 10)} type="date" onChange={(event) => setGetDay({day: event.target.value})}/>
        <button onClick={handleAdd}>{context[2].t("addTask")}</button>
      </div>
    </>
  );
};

export default Form;
