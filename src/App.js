import './App.css';
import React, { Component } from 'react';

import Container from './Components/Container';

import ColorPicker from './Components/ColorPicker';
/* import colors from './Sources/colors.json'; */
import Alert from './Components/Alert';
import Box from './Components/Box';
import Counter from './Components/Counter';
import Dropdown from './Components/Dropdown';
import ToDoList from './Components/ToDoList';
import initialTodos from './Sources/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <Container>
        <h2>ColorPicker</h2>
        <ColorPicker options={colorPickerOptions} />

        <h2>Alerts</h2>
        <Alert text="LOST DATA" type="success" />
        <Alert text="LOST DATA" type="warning" />
        <Alert text="LOST DATA" type="error" />

        <h2>Custom Boxes</h2>
        <Box type="small" />
        <Box type="medium" />
        <Box type="large" />

        <h2>Counter</h2>
        <Counter />

        <h2>Dropdown</h2>
        <Dropdown />

        <h2>ToDoList</h2>
        <div>
          <span>Total: {totalTodoCount}</span>
          <span>Done: {completedTodoCount}</span>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

export default App;
