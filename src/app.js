import { useState } from "react";

//React Forms
function App() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <label>
        Enter your email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default App;
