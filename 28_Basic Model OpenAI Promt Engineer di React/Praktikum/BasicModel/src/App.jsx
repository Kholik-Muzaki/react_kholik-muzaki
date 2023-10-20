import React from 'react';
import ChatAI from './Pages/chat';
import GenerateName from './Pages/generate';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <header className="bg-primary text-white p-3">
        <h1 className="text-center">OpenAI Chat and Generate Name</h1>
      </header>
      <div className="container my-5">
        <ChatAI />
      </div>
      <div className="container my-5">
        <GenerateName />
      </div>
    </div>
  );
}

export default App;
