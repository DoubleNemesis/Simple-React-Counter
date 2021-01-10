import React from "react";
import "./styles.css";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const info = `This simple counter app built in REACT uses
  functional components, the useState hook and a 
  simple CSS grid layout.`;
  return (
    <div className="container">
      <Counter />
      <Info info={info} />
    </div>
  );
}

export default App;
