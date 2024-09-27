import { useMemo, useState } from "react";

//This below function will run on every render resulting in slowing down of everything.

// const expensiveFunction = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

//To prevent this, we can memoize it's result and return it without calculating and only recalculate it when num changes.

//Using useMemo

const App4 = () => {
  const [number, setNumber] = useState(0);
  const calculation = useMemo(() => expensiveFunction(number), [number]);

  return <div>{calculation}</div>;
};

const expensiveFunction = (num) => {
  console.log(" Calculating................the result!");
  for (let i = 0; i < 1000000000; i++) {
    num = num + i;
  }
  return num;
};

export default App4;
