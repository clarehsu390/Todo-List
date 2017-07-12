import configureStore from './store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import { thunk } from './middleware/thunk';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.thunk = thunk;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  window.allTodos = allTodos;
});
