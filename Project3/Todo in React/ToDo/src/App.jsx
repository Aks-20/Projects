import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import ToDoList from "./ToDoList"; // Correct capitalization of component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <ToDoList /> {/* Correct capitalization */}
    </>
  );
}

export default App;
