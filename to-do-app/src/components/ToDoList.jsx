import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({todos, handleDeleteTodo}) {
  return (
    <ul className="todo-list">
        {todos.map((todo)=>(
            <ToDo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>
        ))}  
    </ul>
  )
}
