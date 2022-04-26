import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';


class App extends Component {
  state = {
    todos: [
      {title: "aprender JavScript", completed: false},
      {title: "aprender CSS", completed: false},
      {title: "aprender React", completed: false}
    ],
    inputValue: " "
  }

  toggleTodo = (e) => {
    const index = e.target.getAttribute("data-index")
    const todos = [...this.state.todos];
    const todo = {...todos[index]};
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({todos: todos});
  }

  deleteTodo = (e) => {
    const index = e.target.getAttribute("data-index")
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.inputValue,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo],
    inputValue: " "
    })
  }
  

  render() {
  
    return (
      <div className="App">
        <div className='container'>
          <h1 className='title'>
          Lista de tareas
          </h1>
          <ul>
          {<TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo} 
          deleteTodo={this.deleteTodo}
          />}
          </ul>
          <form onSubmit={this.submitHandler} >
            <input 
            type="text" 
            placeholder='ingrese una nueva tarea'
            value={this.state.inputValue}
            onChange={e=> this.setState({inputValue: e.target.value})}
            ></input>
            <button><span role="img" area-label="emoji">➕</span></button>
          </form>
        </div>
       
      </div>
    );
  }
 
}

export default App;
