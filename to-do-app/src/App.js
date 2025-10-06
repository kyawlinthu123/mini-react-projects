import React, { useEffect, useState } from 'react';
import './reset.css';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import FIlters from './components/FIlters';
import ClearCompletedBtn from './components/ClearCompletedBtn';

function App() {

  let [todos,setTodos] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/todos')
    .then( res => res.json())
    .then(todos => setTodos(todos));
  },[]);

  // CRUD
  // Add Function
  let handleAddToDo = (newToDo) => {
    // client side update
    setTodos((prevTodos => [...prevTodos,newToDo]));
    // server side update
    fetch('http://localhost:3001/todos',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newToDo)
    })
  };

  // Delete Function
  let handleDeleteToDo = (deleteToDoId) => {
    // server side update
    fetch(`http://localhost:3001/todos/${deleteToDoId}`,{
      method: "DELETE"
    })
    // client side update
    setTodos((prevTodos) => prevTodos.filter(prevTodo =>{
      return prevTodo.id !== deleteToDoId
    }))
  };

  // Update Function
  // let handleUpdateToDo = (updatedToDoItem) => {
  //   // server side update
  //   fetch(`http://localhost:3001/todos/${updatedToDoItem.id}`,{
  //     method : "PUT",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body : JSON.stringify(updatedToDoItem)
  //   })
  //   // client side update
  //   setTodos ((prevTodos) => prevTodos.map((prevTodo)=>{
  //     // return prevTodo.id === updatedToDoItem.id? updatedToDoItem: prevTodo
  //     if (prevTodo.id === updatedToDoItem.id){
  //       return updatedToDoItem;
  //     }
  //     return prevTodo;
  //   }))
  // };

  // Update Function
let handleUpdateToDo = async (updatedToDoItem) => {
  try {
    // server side update
    const res = await fetch(`http://localhost:3001/todos/${updatedToDoItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedToDoItem.title,
        completed: updatedToDoItem.completed,
      }),
    });

    if (!res.ok) throw new Error("Failed to update todo");

    const updatedTodoFromServer = await res.json();

    // client side update
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodoFromServer.id ? updatedTodoFromServer : todo
      )
    );
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <ToDoForm handleAddToDo={handleAddToDo}/>
        <ToDoList todos={todos} handleDeleteToDo={handleDeleteToDo} handleUpdateToDo={handleUpdateToDo} />
        <FIlters/>
        <ClearCompletedBtn/>
      </div>
    </div>
  );
}

export default App;