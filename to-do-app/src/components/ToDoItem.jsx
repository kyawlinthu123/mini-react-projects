import React, {useState} from 'react'

export default function ToDoItem({todo, handleDeleteToDo, handleUpdateToDo}) {
    let [editing,setEditing] = useState(false);
    let [input, setInput] = useState(todo.title);

    let submitHandler = (event) => {
        event.preventDefault();
        let newToDoItem = {
            id : todo.id,
            title: input,
            completed: todo.completed
        };
        handleUpdateToDo(newToDoItem);
        setEditing(false);
    }

  return (
    <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              {!editing && 
              <span onDoubleClick={()=>setEditing(true)} className={`todo-item-label ${todo.completed ? 'line-through':""}`}>{todo.title}</span>}
              {editing && 
              <form onSubmit={submitHandler}>
                <input 
                type="text" 
                className="todo-item-input" 
                value={input}
                onChange={(event)=>setInput(event.target.value)}
                />
                </form>}
            </div>
            <button className="x-button" onClick={()=>handleDeleteToDo(todo.id)}>
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
  )
}
