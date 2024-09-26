import React from "react";
import ReactDOM from "react-dom/client";

// Class based components
class Cat extends React.Component {
  render() {
    return <h1>Hello, I am a Cat!</h1>;
  }
}

// function based components

function Cat2() {
  return <h1>Meow</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Cat />
    <Cat2 />
  </div>
);
