import { useState } from 'react';
import './App.css';

function App() {

  let [count,setCount] = useState(0);

  return (
    <div className='App'>
      <h1> Counter App </h1>
      <label> {count} </label>
      <div>
        <button onClick={()=>setCount(count-1)}> Decrease </button>
        <button onClick={()=>setCount(0)}> Reset </button>
        <button onClick={()=>setCount(count+1)}> Increase </button>
      </div>
    </div>
  );
}

export default App;
