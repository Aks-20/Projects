import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateBooks from './pages/CreateBooks.jsx';
import EditBooks from './pages/EditBooks.jsx';
import DeleteBooks from './pages/DeleteBooks.jsx';
import ShowBook from './pages/ShowBook.jsx';
import axios from 'axios';
import {useState} from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBmKOwDKmWNfTQ3ZC9Mt3evtY4RAYTi8Ao",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  };

  return (<>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
    </Routes>

<h1>AI Chatbot</h1>
<textarea
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  cols="30"
  rows="10"
></textarea><br /><br />
<button class="submit-button" onClick={generateAnswer}>Generate answer</button><br /><br />
<p class = "box">{answer}</p>
</>

  );
}

export default App;
