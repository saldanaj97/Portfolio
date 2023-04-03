import React from "react";
import Main from "./containers/Main";

require("dotenv").config();

function App() {
  return (
    <div>
      <head>
        <title>Portfolio</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin></link>
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' rel='stylesheet'></link>
      </head>
      <Main />
    </div>
  );
}

export default App;
