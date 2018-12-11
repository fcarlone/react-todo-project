import React from 'react';
const uuidv1 = require('uuid/v1');

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      id: ''
    };
  };

  handleAddTodo = (event) => {
    const newTodoText = event.target.value;
    this.setState(() => ({
      newTodo: newTodoText,
      id: uuidv1()
    }))
  };

  onChangeTodo(event) {
    event.preventDefault();

    this.props.changeTodos(this.state);

    this.setState(() => ({
      newTodo: '',
      id: ''
    }))
  }

  render() {
    return (
      <div>
        <h3>Todo Form Component</h3>
        <form onSubmit={this.onChangeTodo.bind(this)}>
          <input
            type="text"
            placeholder="Enter new todo here"
            value={this.state.newTodo}
            onChange={this.handleAddTodo}
          />
          <div>
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
};

export default TodoForm;
