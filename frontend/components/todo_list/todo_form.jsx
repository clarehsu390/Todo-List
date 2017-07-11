import React from 'react';
import { uniqueId } from '../../util/util.js';
import { receiveTodo } from '../../actions/todo_actions';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    // this.baseState = this.state;
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({title: "", body: ""});


  }

  handleTitle(event) {
    this.setState({title: event.currentTarget.value});
  }

  handleBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        Title<input onChange={this.handleTitle} value={this.state.title}></input>
        Body<input onChange={this.handleBody} value={this.state.body}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );

  }
}

export default TodoForm;
