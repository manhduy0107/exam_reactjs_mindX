import { FaRegCircle, FaRegCheckCircle, FaBeer } from "react-icons/fa";
import React, { useContext } from "react";
import { formatDistance } from "date-fns";
import { enAU, vi } from "date-fns/locale";
import ThemeContext from "../utility/ThemeContext";
import { actions } from "../reducer";

const TodoListPending = () => {
  const context = useContext(ThemeContext);
  const [state, dispatch] = useContext(ThemeContext);
  const { todos } = state;
  const handleChangeStatus = (todo, status) => {
    dispatch(actions.setStatus({ todo, status }));
  };
  const handleDeleteTodo = (todo) => {
    dispatch(actions.delete_todo(todo));
  };
  return (
    <div className="todo-list-container">
      {todos?.map((todo) =>
        todo.status === "pending" ? (
          <div className="todo-item-container" key={todo.id}>
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => handleChangeStatus(todo.id, todo.status)}
            />
            <div className="item-title">{todo.todo} </div>
            {context[2].currentLanguage === "vi" ? (
              <span className="day-left-info">
               {formatDistance(todo.dayLeft, Date.now(), { locale: vi, addSuffix: true })}
              </span>
            ) : (
              <span className="day-left-info">
                {formatDistance(todo.dayLeft, Date.now(), { locale: enAU, addSuffix: true })}
              </span>
            )}

            <FaBeer
              className="trash-item-button"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default TodoListPending;
