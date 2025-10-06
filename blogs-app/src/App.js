import react from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <nav>
      <h1> Blogs App </h1>
      <ul>
        <li>
          <NavLink to=""> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
    </div>
  );
}

export default App;
