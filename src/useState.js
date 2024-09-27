import { useState, useEffect } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   // Use useEffect to set the values once when the component mounts
//   useEffect(() => {
//     setName("Israt");
//     setAge(27);
//   }, []); // Empty dependency array ensures this runs only once after the initial render

//   return (
//     <h1>
//       My name is: {name} and Age is: {age}
//     </h1>
//   );
// };

// export default App;

const App2 = () => {
  const [data, setData] = useState({
    name: "Atik",
    age: 28,
  });

  return (
    <>
      <h1>
        My name is {data.name} and my age is {data.age}
      </h1>
      <button onClick={() => setData({ ...data, name: "CWH" })}>
        Click Me
      </button>
    </>
  );
};

export default App2;
