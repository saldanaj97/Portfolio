import React from 'react';
import './App.css';
import Main from "./containers/Main";

require('dotenv').config()

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
