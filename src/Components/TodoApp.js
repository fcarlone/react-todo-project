import React from 'react';
import TodoDashboard from './TodoDashboard';

class TodoApp extends React.Component {

  render() {
    return (
      <div>
        <h1>React Todo Application</h1>
        <TodoDashboard />
      </div>
    )
  }
}

export default TodoApp;
