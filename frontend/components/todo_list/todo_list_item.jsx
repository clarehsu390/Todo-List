import React from 'react';
import merge from 'lodash/merge';



class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  handleClick() {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  toggleButton() {
    let toggled = merge({}, this.props.todo, {done: !this.props.todo.done});
    this.props.receiveTodo(toggled);

  }

  render() {
    const {todo, removeTodo, receiveTodo} = this.props;
    return (

      <div>
      <li>{todo.title}</li>
      <button onClick={this.handleClick}>Remove</button>
      <button onClick={this.toggleButton}>{todo.done ? "Undo" : "Done"}</button>
      </div>

    );
  }
}

export default TodoListItem;
