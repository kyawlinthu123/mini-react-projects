import { useState } from "react"

export default function ToDoForm({handleAddToDo}) {

  let [input,setInput] = useState("");
  
  let submitHandler = (event) => {
    event.preventDefault();
    let newToDoItem = {
      id : Math.random,
      title : input,
      completed: false
    };
    handleAddToDo(newToDoItem);
    setInput("");
  }

  return (
     <form onSubmit={submitHandler}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={input}
            onChange={(event)=>setInput(event.target.value)}
          />
        </form>
  )
}
