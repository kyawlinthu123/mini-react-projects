import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
   <div>
    <h1>Library Management App</h1>
    <div>
      <Outlet/>
    </div>
   </div>
  )
}

export default App;
