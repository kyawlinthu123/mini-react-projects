import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({todos, deleteToDo}) {
  return (
    <ul className="todo-list">
        {todos.map((todo)=>(
            <ToDo todo={todo} deleteToDo={deleteToDo}/>
        ))}  
    </ul>
  )
}
