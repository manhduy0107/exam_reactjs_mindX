import { ADD_TODO, DELETE_TODO, SET_STATUS, SET_TODO_INPUT } from "./constants";


export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const delete_todo = payload => ({
    type: DELETE_TODO,
    payload
})

export const setStatus = payload => ({
    type: SET_STATUS,
    payload
})