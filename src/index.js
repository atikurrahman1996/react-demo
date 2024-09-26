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
    <h1>Welcome</h1>
    <h2>To do App</h2>
    <p>
      ReactJS is a JavaScript library used to build User Interfaces(UI).Run this
      command to create a React application named my-react-app: npx
      create-react-app my-react-app
    </p>

    <Cat />
    <Cat2 />
  </div>
);
