import React, { useState } from 'react'

export default function ToDoForm({addToDo}) {

  const [input,setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
        "id" : Math.floor(Math.random()),
        "title" : input,
        "completed" : false
        };
    addToDo(todo);
    setInput("");
  }

  return (
     <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>
  )
}
