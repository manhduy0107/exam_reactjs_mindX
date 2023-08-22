import { FaRegCircle, FaRegCheckCircle, FaBeer } from "react-icons/fa";
import React, { useContext } from "react";
import ThemeContext from "../utility/ThemeContext";
import { actions } from "../reducer";

const TodoListCompleted = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const { todos } = state;
  const handleChangeStatus = (todo, status) => {
    dispatch(actions.setStatus({todo, status}));
  };
  const handleDeleteTodo = (todo) => {
    dispatch(actions.delete_todo(todo));
  };
  return (
    <div className="todo-list-container">
      {todos?.map((todo) =>
        todo.status === "completed" ? (
            <div className="todo-item-container done" key={todo.id}>
            <FaRegCheckCircle color="#9a9a9a" className="item-done-button" onClick={() => handleChangeStatus(todo.id, todo.status)}/>
            <div className="item-title">{todo.todo}</div>
            <FaBeer
              className="trash-item-button-compeleted "
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

export default TodoListCompleted;
