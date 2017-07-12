import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const {todos, receiveTodo, removeTodo, createTodo} = this.props;
    const listItems = todos.map((todo, id) => (
      <TodoListItem key={id} todo={todo}
        removeTodo={removeTodo} receiveTodo={receiveTodo}/>
    ));
    return (
      <div>
      <ul>
        {listItems}
      </ul>

      <TodoForm createTodo={createTodo}/>

      </div>
    );
  }
}




export default TodoList;
