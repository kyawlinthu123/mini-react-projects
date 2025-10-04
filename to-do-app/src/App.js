import React, { useState } from 'react';
import './reset.css';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import CheckAllandRemaining from './components/CheckAllandRemaining'
import ClearCompletedBtn from './components/ClearCompletedBtn';

function App() {

  const [todos,setTodos] = useState([]);

  useState(()=>{
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos => setTodos(todos))
  },[])

  // CRUD Operations

  const handleAddTodo = (newTodo) => {
    // server side update
    fetch('http://localhost:3001/todos',{
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(newTodo)
    })
    // client side update
    setTodos(prevTodos => [...prevTodos,newTodo])
  };

  const handleDeleteTodo = (deleteTodoID) => {
    // client side update
    setTodos(prevTodos => prevTodos.filter(prevTodo => {
      return prevTodo.id !== deleteTodoID
    }))
  };

  const handleUpdateTodo = () => {
    console.log('this will be an update function')
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <ToDoForm handleAddTodo={handleAddTodo}/>
        <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
        <CheckAllandRemaining/>
        <ClearCompletedBtn/>
      </div>
    </div>
  );
}

export default App;