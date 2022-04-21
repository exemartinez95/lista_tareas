import React, {Component} from 'react';
import './App.css';



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

  renderTodos = () => {
    return this.state.todos.map(
      (todo, index) => {
        return (
            <li  key={todo.title}>

              <span className={`title-tarea ${todo.completed ? "completed" : " "}`}>{todo.title}</span>

              <span role="img" area-label="emoji" className='icon-tarea'onClick={this.toggleTodo}
              data-index={index}
              > 
              🆗
              </span>
              <span role="img" area-label="emoji" className='icon-tarea' onClick={this.deleteTodo}
              data-index={index}>❌</span>

          </li>
        )
      }
    )
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
  
    const renderedTodos = this.renderTodos()
    return (
      <div className="App">
        <div className='container'>
          <h1 className='title'>
          Lista de tareas
          </h1>
          <ul>
           {renderedTodos}
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
