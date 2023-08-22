import {
  ADD_TODO,
  DELETE_TODO,
  SET_STATUS,
  SET_TODO_INPUT,
} from "./constants.js";

const initState = {
  todos: [],
  todoInput: "",
};

export const getInitState = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : initState
}

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      localStorage.setItem(
        "todos",
        JSON.stringify({todos: [...state.todos, action.payload] })
      );
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const deletedTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem(
        "todos",
        JSON.stringify({todos: deletedTodo})
      );
      return {
        todos: deletedTodo,
      };
    case SET_STATUS:
      let setChangeStatus;
      if (action.payload.status === "pending") {
        setChangeStatus = state.todos.filter((todo) =>
          todo.id === action.payload.todo ? (todo.status = "completed") : todo
        );
      } else {
        setChangeStatus = state.todos.filter((todo) =>
          todo.id === action.payload.todo ? (todo.status = "pending") : todo
        );
      }
      localStorage.setItem(
        "todos",
        JSON.stringify({todos: setChangeStatus})
      );
      return {
        todos: setChangeStatus,
      };
    default:
      throw new Error("Invalid action");
  }
}

export default reducer;
