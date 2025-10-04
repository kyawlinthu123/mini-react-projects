import { useState } from 'react';
import './App.css';

function App() {

  let [count,setCount] = useState(0);

  return (
    <div className='App'>
      <h1> Counter App 🔢 </h1>
      <span className='result'> {count} </span>
      <div className='buttons'>
        <button className='btn' onClick={()=>setCount(count-1)}> Decrease </button>
        <button className='btn' onClick={()=>setCount(0)}> Reset </button>
        <button className='btn' onClick={()=>setCount(count+1)}> Increase </button>
      </div>
    </div>
  );
}

export default App;
