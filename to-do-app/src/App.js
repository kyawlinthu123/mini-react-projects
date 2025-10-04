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

  const addToDo = (todo) => {
    fetch('http://localhost:3001/todos',{
      method: "POST",
      headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(todo),
    })
    setTodos ((prevState) => [...prevState,todo])
  };

  const deleteToDo = (todoID) => {
    setTodos(prevState => {
      return prevState.filter(todo=>{
        return todo.id !== todoID;
      });
    })
  }
  

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <ToDoForm addToDo={addToDo}/>
        <ToDoList todos={todos} deleteToDo={deleteToDo}/>
        <CheckAllandRemaining/>
        <ClearCompletedBtn/>
      </div>
    </div>
  );
}

export default App;