import React from 'react';
import styles from '../styles/components/TodoForm.scss';

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
      <div className={styles.pageHeader}>
        <div className={styles.contentContainer}>
          <h3 className={styles.pageHeaderTitle}>Todo Input Form</h3>
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              {this.state.error && <p>{this.state.error}</p>}
              <input
                className={styles.inputField}
                type="text"
                placeholder="enter new todo here"
                value={this.state.newTodo}
                onChange={this.handleAddTodo}
              />
              <div>
                <button className={styles.button}>Add Todo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default TodoForm;
