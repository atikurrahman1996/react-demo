import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("ISRAT JAHAN");

  return (
    <UserContext.Provider value={user}>
      <h1>{`HELLO ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>I LOVE YOU</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>SO MUCH</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>LOVE UUUUUUUUUUUUUUUUUUUUUUUU</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>IT'S THE FINAL WORDS, THERE IS NOTHING ELSE, AFTER THAT</h1>
      <h2>{`HELLO ${user} AGAIN! I LOVE YOU SO MUCH`}</h2>
    </>
  );
}

export default Component1;

/*
import { useState, createContext, useContext } from "react";
const StateContext = createContext()

function App() {
  const [state, setState] = useState('true');

  return (
    <StateContext.Provider value={state}>
      <h1>{`Hi! My state is ${state}!`}</h1>
      <Home state={state} />
    </StateContext.Provider>
  );
}

  function Home() {
  const state = useContext(StateContext);

  return (
    <>
      <h2>{`Hii! My state is ${state}! `}</h2>
    </>
  );
}
*/
