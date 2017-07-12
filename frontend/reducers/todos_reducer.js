import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions.js";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const todos = {};
        action.todos.forEach(function(el) {
          todos[el.id] = el;
        });
        return todos;
      case RECEIVE_TODO:
        // console.log(action.todo);
        // const newToDo = {[action.todo.id]: action.todo};
        // return merge(state, newToDo);
        newState[action.todo.id] = action.todo;
        return newState;
      case REMOVE_TODO:
        delete newState[action.todo.id];
        return newState;
      default:
      return state;

  }
};

export default todosReducer;
