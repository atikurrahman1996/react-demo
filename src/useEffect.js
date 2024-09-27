import { useState, useEffect } from "react";

//Runs on every render:

// function Home() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I am at home rendered {count} times</h1>;
// }

// export default Home;

//Runs on first render:

function Home2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I have rendered {count} times!</h1>;
}

export default Home2;
