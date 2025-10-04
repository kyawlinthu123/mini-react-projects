import { useState } from "react"

export default function ToDoForm({handleAddTodo}) {

  const [input,setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id : Math.random(),
      title: input,
      completed: false
    };
    handleAddTodo(newTodo);
    setInput("");
  }

  return (
     <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={input}
            onChange={event=>setInput(event.target.value)}
          />
        </form>
  )
}
