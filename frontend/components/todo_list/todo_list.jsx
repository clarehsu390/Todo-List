import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const listItems = todos.map((todo, id) => (
    <TodoListItem key={id} todo={todo}/>
  ));
  return (
    <div>
    <ul>
      {listItems} 
    </ul>

    <TodoForm receiveTodo={receiveTodo}/>
    </div>
  );
};

export default TodoList;
