import React from 'react';
import './App.css';
import Timer from './components/Timer';
import StopWatch from './components/StopWatch/StopWatch';

function App() {
  return (
    <div className='App'>
      <h1> Timer/StopWatch </h1>
      <div className=''>
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
