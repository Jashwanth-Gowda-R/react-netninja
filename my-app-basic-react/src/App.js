import "./App.css";
import { useState } from "react";

function App() {
  // const [name, setName] = useState("jashu");
  const [name, setName] = useState(true);
  // var HandleNameChange = () => {
  //   setName("Shani");
  // };
  return (
    <div className="App">
      <h1>{name ? "Shani" : "Ragavendra"}</h1>
      {/* <button onClick={HandleNameChange}>Change name</button> */}
      <button onClick={() => setName(!name)}>Change name</button>
    </div>
  );
}

export default App;
