import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      error: ''
    }
  };

  handleAddTodo = (event) => {
    const newTodoText = event.target.value;
    this.setState(() => ({
      newTodo: newTodoText,
    }));
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.newTodo.length < 1) {
      this.setState(() => ({
        error: 'Please provide a todo item'
      }))
    } else {
      this.setState(() => ({ error: '' }))

      this.props.changeTodos(this.state);

      this.setState(() => ({
        newTodo: '',
      }));
    }


  }

  render() {
    return (
      <div>
        <h3>Todo Form Component</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="enter new todo here"
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
