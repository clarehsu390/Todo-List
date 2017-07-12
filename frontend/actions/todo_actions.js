export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtils from '../util/todo_api_util.js';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos

});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  APIUtils.makeRequests().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodos = () => dispatch => (
  APIUtils.createTodos().then(todo => dispatch(receiveTodo(todo)))
);
