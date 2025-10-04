import React, { useEffect, useRef, useState } from 'react'
import './index.css'

export default function StopWatch() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(()=>{
    if (isRunning){
       intervalIdRef.current = setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current)
      },10);
    }

    return () => {
      clearInterval(intervalIdRef.current)
    };

  },[isRunning])

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handlReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10 )

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className='stopwatch'>
      <h2> Stop Watch </h2>
      <div className='display'>
        {formatTime()}
      </div>
      <div className='controls'>
        <button className='start-btn' onClick={handleStart}> Start </button>
        <button className='stop-btn' onClick={handleStop}> Stop </button>
        <button className='reset-btn' onClick={handlReset}> Reset </button>
     </div>
    </div>
  )
}
