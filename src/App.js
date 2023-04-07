import React from "react";
import Main from "./containers/Main";

/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
}); */

function App() {
  return (
    <div>
      <head>
        <title>Portfolio</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' rel='stylesheet'></link>
      </head>
      <Main />
    </div>
  );
}

export default App;
