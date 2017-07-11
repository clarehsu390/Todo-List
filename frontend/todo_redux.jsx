import configureStore from './store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
});
