import React, {Component} from "react"; 

class Todo extends Component {
    render () {
    const {todo, index, toggleTodo, deleteTodo} = this.props;
    return (
              <li>
  
                <span className={`title-tarea ${todo.completed ? "completed" : " "}`}>{todo.title}</span>
  
                <span role="img" area-label="emoji" className='icon-tarea'onClick={toggleTodo}
                data-index={index}
                > 
                🆗
                </span>
                <span role="img" area-label="emoji" className='icon-tarea' onClick={deleteTodo}
                data-index={index}>❌</span>
  
            </li>
          )
} 
}


export default Todo
