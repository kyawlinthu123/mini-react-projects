import React, { useState } from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoList({todos, handleDeleteToDo, handleUpdateToDo}) {

  return (
    <ul className="todo-list">
          {todos.map(todo =>(
            <ToDoItem key={todo.id} todo={todo} handleDeleteToDo={handleDeleteToDo} handleUpdateToDo={handleUpdateToDo} />
          ))}
    </ul>
  )
}
