/*
React creates a VIRTUAL DOM in memory
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
where it does all the necessary manipulating, before making the changes in the browser DOM.
JSX:JSX stands for JavaScript XML.JSX allows us to write HTML in React.JSX converts HTML tags into react elements.

React Components:
Components are independent and reusable bits of code. Components come in two types, Class components and Function components, we will concentrate on Function components.
Create a Function component called Car:

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

//React Props:

Props are arguments passed into React components. Props are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.
Example:
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myElement = <Car brand="Ford" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

React Events:
React events are written in camelCase syntax: onClick instead of onclick.
React event handlers are written inside curly braces: onClick={shoot}  instead of onclick="shoot()".
<button onClick={shoot}>Take the Shot!</button>

//React Lists:
In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.
Example:
function App() {
  const languages = ['JS', 'Python', 'Java', 'C', 'C++', 'C#'];

  return (
    <div className="App">
      {languages.map((language) => {
        return <div>I love {language}</div>
      })}
    </div>
  );
}

//React Forms: 
React Forms are mostly like normal HTML forms, except we use state in this to handle inputs. 
import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;


//React Router:
React router is used for page routing as React App doesn't include it as default. 
Install: npm i -D react-router-dom or npm i -D react-router-dom@latest
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


React Memo:
By default React re-renders components again and again. Using memo will stop that if props have not changed. 
This can improve performance.
Problem: When we make components like Navbar, Footer, they re-render even if there is no change in them. 
To test this you can make a Navbar component and import it. Put a console.log, if it is logging, it means navbar is re-rendering. 

Solution:
So what's the solution for this? Because this re-rendering is just wastage of resources. 
memo is a simple solution for this! What memo does is, it just monitors if props have changed, 
if they have it re-renders, if they haven't it doesn't render again. 

props is an object and javascript is very fast in comparing objects as it doesn't compare the whole object, 
it just checks the address! 

Importing memo:
To use it, first we need to import memo. It can be imported like this: import { memo } from "react";
Using memo: export default memo(Navbar);

//Hooks:
Hooks allow us to "hook" into React features such as state and lifecycle methods.
Hooks let you use state and other React features without writing a class. Although states have largely replaced classes in React
Things you need to keep in mind while using hooks:
-You must import hook first
-You must import it from react
-Hooks can only be called in React Function Components, meaning:
const Blogs = () => {
    // Can call here
    return <h1>Blogs</h1>;
};

export default Blogs;

-Hooks cannot be conditional
-Hooks cannot work in React Class Components
-Hooks can only be called at the top level of a component, meaning it can't be called from inside a block, 
i.e. {}. So, can't be called inside if, loops or any block, example:

const Blogs = () => {
    // Can call here
    if (true){
        // Can't call here
    }
    return <h1>Blogs</h1>;
};

export default Blogs;


//useState:
useState is a Hook that lets you add React state to function components. 

Importing useState:
To use useState, first we need to import: import { useState } from "react";

Initializing useState:
import { useState } from "react";

const App = () => {
    const [name, setName] = useState('')
};


React useEffect Hook:
The useEffect Hook allows you to perform side effects in your components.
useEffect accepts two arguments. The second one is optional. 
import { useState, useEffect } from "react";

React useContext:
useState is a Hook that lets you add React state to function components. 
useContext helps to manage states globally, i.e. between components. 
To create context, you must Import createContext and initialize it:

import { useState, createContext, useContext } from "react";
const UserContext = createContext();

React useRef:
useRef keeps the value stored between renders. 
In this, value changed doesn't cause a re-render. 
It can also be used to access a DOM element directly. 
Use useRef to track application renders.
import { useState, useEffect, useRef } from "react";
useRef() only returns one item. 
It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).

*/
