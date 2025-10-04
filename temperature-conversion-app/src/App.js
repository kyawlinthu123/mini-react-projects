import { useState } from 'react';
import './App.css';

function App() {

  let [inputTemp,setInputTemp] = useState("");
  let [tempType,setTempType] = useState('celsius')
  let [resultTemp,setResultTemp] = useState("");

  const handleConvert = (e) => {
  e.preventDefault();

  if (inputTemp === "") return alert("Please enter a value");

  const temp = parseFloat(inputTemp);
  let result;

  if (tempType === "celsius") {
    result = (temp * 9/5 + 32).toFixed(2) + " °F";
  } else {
    result = ((temp - 32) * 5/9).toFixed(2) + " °C";
  }

  setResultTemp(result);
  setInputTemp("")
};


  return (
    <div className='App'>
  <div className="conversion-container">
    <form action="" onSubmit={handleConvert}>
      <h1> Temperature Conversion </h1>

      <div className="form-group">
        <label htmlFor=""> Degree </label>
        <input type="number" value={inputTemp} onChange={(e)=>setInputTemp(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor=""> Type </label>
        <select value={tempType} onChange={(e)=>setTempType(e.target.value)}>
          <option value="celsius">°C to °F </option>
          <option value="fahrenheit" > °F to °C  </option>
        </select>
      </div>

      <div className="result">
        <span> Result : {resultTemp} </span>
      </div>
      <div className="button-group">
        <button type='submit' className="btn">Convert</button>
        <button type='button' className='btn' onClick={()=>setResultTemp("")}>Reset</button>
      </div>
    </form>
  </div>
</div>

  );
}

export default App;
