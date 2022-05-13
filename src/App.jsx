import { useState } from "react";
import Button from "./Components/Button";
import "./App.css";

function App() {
  console.log("considering");
  const [text, setText] = useState("");
  const returnDiv = (
    <div className="App" id="text">
      <span>{text}</span>
      <input
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <Button />
    </div>
  );

  return <>{returnDiv}</>;
}

export default App;
