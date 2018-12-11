import React from 'react';
import TodoList from './TodoList';

class TodoDashboard extends React.Component {

  render() {
    return (
      <div>
        <h3>TodoDashboard Component</h3>
        <TodoList />
      </div>
    )
  }

};

export default TodoDashboard;
