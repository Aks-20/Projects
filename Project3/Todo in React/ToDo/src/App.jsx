import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import ToDoList from "./ToDoList"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>TODOS</h1>
      <CssBaseline />
      <ToDoList /> {/* Correct capitalization */}
    </>
  );
}

export default App;
