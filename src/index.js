import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="content">
      <div className="header">Header-Main-Main</div>
      <div className="main">Main</div>
      <div className="footer">Footer</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
